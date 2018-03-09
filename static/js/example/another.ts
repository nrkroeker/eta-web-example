import * as Delta from "../node_modules/@xroadsed/delta-client/index.js";
import { LogItemComponent, Log } from "../dynamic/logItem.js";

export default class AnotherComponent extends Delta.Component {

    private logItemTemplate: HandlebarsTemplateDelegate;
    private logComponents: LogItemComponent[];

    public async init(): Promise<void> {
        super.init();
        // const logs = await $.get({
        //     url: "/api/example/log/getLogs"
        // });
        this.logComponents = [];
        this.logItemTemplate = await LogItemComponent.getTemplate("/dynamic/logItem");
        $(document).on("click", "#log-submit", () => { this.addLog(); });
    }

    async load(): Promise<void> {
        this.render();

        // for (const log in this.logComponents) {
        //     this.logs[log].append($("#log-container"), this.logs[log].log);
        // }
        $(document).on("click", ".delete-log", (ev) => { this.deleteLog($(ev.target).find("li")); });
    }

    private addLog(): void {
        this.logComponents.push(new LogItemComponent("/dynamic/logItem", "#log-container", this.logItemTemplate));
        const log: Log = {
            index: this.logComponents.length - 1,
            body: $("#new-log").val().toString()
        }
        this.logComponents[log.index].update(log);
        this.logComponents[log.index].insertAfter();
    }

    private deleteLog(logComponent: JQuery): void {    //
        $(logComponent).remove();
    }
}
