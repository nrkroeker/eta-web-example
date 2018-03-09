import * as Delta from "../node_modules/@xroadsed/delta-client/index.js";

export interface Log {
    index: number
    body: string;
}

export class LogItemComponent extends Delta.DynamicComponent<Log> {
    public log: Log;

    public update(props: Log) {
        this.log = props;
        super.update(this.log);
    }

    async load(): Promise<void> {
        await super.load();
        // return $.get({
        //         url: "/api/example/number/updateNumber",
        //         success: (result: Log) => {
        //             this.log = result.log;
        //             this.update(result);
        //         }
        // });
    }
}
