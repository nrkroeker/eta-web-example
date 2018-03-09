import * as Delta from "../../node_modules/@xroadsed/delta-client/index.js";

export default abstract class LandingContentComponent extends Delta.Component{

    public abstract output(): void;
}
