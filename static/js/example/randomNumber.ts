import * as Delta from "node_modules/@xroadsed/delta-client/index.js";

interface RandomNumber {
    rand: number;
}

export default class RandomNumberComponent extends Delta.DynamicComponent<RandomNumber> {
    rand: number;
    async init(container: string) {
        this.container = container;
        await this.getView();
    }

    async load(): Promise<void> {
        await $.get({
                url: "/api/example/number/updateNumber",
                success: (result: RandomNumber) => {
                    this.rand = result.rand;
                    this.update(result);
                }
        });
    }
}
