import * as Delta from "../node_modules/@xroadsed/delta-client/index.js";
import { LogItemComponent, Log } from "../dynamic/logItem.js";

export default class AnotherComponent extends Delta.Component {
    private logItemTemplate: HandlebarsTemplateDelegate;
    private logComponents: LogItemComponent[];

    public async init(): Promise<void> {
        super.init();
        this.logComponents = [];
        this.logItemTemplate = await LogItemComponent.getTemplate("/dynamic/logItem");
        $(document).on("click", "#log-submit", async () => {
            this.addLog({title: "title", body: await this.getRandNum()});
        });
    }

    async load(): Promise<void> {
        super.load();
        if(this.logComponents.length > 0) {
            Promise.all(
                this.logComponents.map(async log => {
                    log.load({body: await this.getRandNum()});
                })

            );
        }
    }

    async getRandNum(): Promise<string> {
        return (await $.get("/api/example/number/updateNumber")).rand.toString();
    }

    private addLog(log: Partial<Log>): void {
        let newLog: LogItemComponent = new LogItemComponent("/dynamic/logItem", "#log-container", this.logItemTemplate);
        this.logComponents.push(newLog);
        newLog.init();
        newLog.load(log);
        newLog
            .on("deleteLog", this.onLogDelete(newLog))
            .on("editLog", this.onLogEdit(newLog))
            .on("updateLog", this.onLogUpdate(newLog))
        newLog.context.find("span").css('color', 'cornflowerblue');
    }

    public onLogEdit(logComponent: LogItemComponent): () => void {
        return () => {
            const ctx: JQuery = logComponent.context;
            ctx.find("input").val(logComponent.getProps().body);
            ctx.find(".hidden").removeClass("hidden");
            ctx.find("span, .edit-log").addClass("hidden");
        }
    }

    public onLogUpdate(logComponent: LogItemComponent): () => void {
        return () => {
            const ctx: JQuery = logComponent.context;
            ctx.find(".hidden").removeClass("hidden");
            ctx.find("input, .confirm").addClass("hidden")
            logComponent.update({body: <string>ctx.find("input").val()});
        }
    }

    private onLogDelete(logComponent: LogItemComponent): () => void {
        return () => {
            const index = this.logComponents.indexOf(logComponent);
            this.logComponents.splice(index, 1);
            logComponent.context.remove();
        };
    }
}
