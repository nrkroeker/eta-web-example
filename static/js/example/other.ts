import * as Delta from "node_modules/@xroadsed/delta-client/index.js";

export class OtherComponent extends Delta.Component {
    async load(): Promise<void> {
        this.render($("#root"));
    }
}

export default OtherComponent
