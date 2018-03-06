import * as Delta from "node_modules/@xroadsed/delta-client/index.js";
import RandomNumberComponent from "../dynamic/randomNumber.js";

export class IndexComponent extends Delta.Component {

    private rand: RandomNumberComponent;

    async load(): Promise<void> {
        this.render($("#root"));
        if (!this.rand) {
            let randomNumTemplate = await RandomNumberComponent.getTemplate("/dynamic/randomNumber");
            this.rand = new RandomNumberComponent("/dynamic/randomNumber", randomNumTemplate);
            await this.rand.init();
        }
        await this.rand.load();
        this.rand.render($("#rand-container"));
    }

}

export default IndexComponent
