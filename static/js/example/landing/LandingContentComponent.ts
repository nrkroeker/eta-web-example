import * as Delta from "../../node_modules/@xroadsed/delta-client/index.js";

export default abstract class LandingContentComponent extends Delta.Component{
    public async init(): Promise<void> {
        await super.init()
        this.output();
    }

    public abstract output(): void;
}
