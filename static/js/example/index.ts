import * as Delta from "node_modules/@xroadsed/delta-client/index.js";
import RandomNumberComponent from "./randomNumber.js";

export class IndexComponent extends Delta.Component {

    rand: RandomNumberComponent;

    async init(container: string): Promise<void> {
        await new Promise((resolve,reject) => {
            this.getView();
            this.container = container;
            resolve;
        });
    }

    async load(): Promise<void> {
        await new Promise((resolve, reject) => {
            this.rand = new RandomNumberComponent("/example/randomNumber");
            this.rand.init("#randomNumberContainer");
            this.rand.load();
            resolve;
        });
    }

}

export default IndexComponent
