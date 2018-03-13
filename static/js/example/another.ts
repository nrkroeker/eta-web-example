import * as Delta from "../node_modules/@xroadsed/delta-client/index.js";
import { LogItemComponent, Log } from "../dynamic/logItem.js";

export default class AnotherComponent extends Delta.Component {
    private logItemTemplate: HandlebarsTemplateDelegate;
    private logComponents: LogItemComponent[];

    public async init(): Promise<void> {
        super.init();
        this.logComponents = [];
        this.logItemTemplate = await LogItemComponent.getTemplate("/dynamic/logItem");
        $(document).on("click", "#log-submit", () => { this.addLog(<string>$("#new-log").val()); });
    }

    async load(): Promise<void> {
        this.render();
    }

    private addLog(logText: string): void {
        let newLog: LogItemComponent = new LogItemComponent("/dynamic/logItem", null, this.logItemTemplate, "#log-container");
        this.logComponents.push(newLog);
        newLog
            .on("deleteLog", this.onLogDelete(newLog))
            .on("editLog", this.onLogEdit(newLog))
            .on("updateLog", this.onLogUpdate(newLog))
            .init();
        newLog.load({title: "title", body: logText});
        newLog.getContext().find("span").css('color', 'cornflowerblue');
    }

    public onLogEdit(logComponent: LogItemComponent): () => void {
        return () => {
            const ctx: JQuery = logComponent.getContext();
            ctx.find("input").val(logComponent.props.body);
            ctx.find(".hidden").removeClass("hidden");
            ctx.find("span, .edit-log").addClass("hidden");
        }
    }

    public onLogUpdate(logComponent: LogItemComponent): () => void {
        return () => {
            const ctx: JQuery = logComponent.getContext();
            ctx.find(".hidden").removeClass("hidden");
            ctx.find("input, .confirm").addClass("hidden")
            logComponent.update({title: "new-title", body: <string>ctx.find("input").val()});
        }
    }

    private onLogDelete(logComponent: LogItemComponent): () => void {
        return () => {
            const index = this.logComponents.indexOf(logComponent);
            this.logComponents.splice(index, 1);
            $(logComponent.getContext()).remove();
        };
    }
}
