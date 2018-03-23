import * as Delta from "node_modules/@xroadsed/delta-client/index.js";

export interface Log {
    body: string;
    title: string;
}

export class LogItemComponent extends Delta.DynamicComponent<Log> {

    public async load(props: Partial<Log>): Promise<void> {
        await super.load(props);
        this.context
            .on("click", ".delete-log", () => {
                this.emit("deleteLog");
            })
            .on("click", ".edit-log", () => {
                this.emit("editLog");
            })
            .on("click", ".confirm", () => {
                this.emit("updateLog");
            });
    }
}
