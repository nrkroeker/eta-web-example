import * as Delta from "node_modules/@xroadsed/delta-client/index.js";

export default class AnotherComponent extends Delta.Component {

    async load(): Promise<void> {
        this.render($("#root"));
    }

}
