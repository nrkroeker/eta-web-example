import * as Delta from "node_modules/@xroadsed/delta-client/index.js";
import RandomNumberComponent from "../dynamic/randomNumber.js";

export class IndexComponent extends Delta.Component {

    rand: RandomNumberComponent;

    async load(): Promise<void> {
        let randomNumTemplate = await RandomNumberComponent.getTemplate("/dynamic/randomNumber");
        this.render($("#root"));
        this.rand = new RandomNumberComponent("/dynamic/randomNumber", randomNumTemplate);
        await this.rand.init();
        await this.rand.load();
        this.rand.render($("#rand-container"));
    }

}

export default IndexComponent
