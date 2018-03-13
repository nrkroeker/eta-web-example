import * as Delta from "../node_modules/@xroadsed/delta-client/index.js";

interface RandomNumber {
    rand: number;
}

export default class RandomNumberComponent extends Delta.DynamicComponent<RandomNumber> {
    rand: RandomNumber;
    public async load(): Promise<void> {
        const result: RandomNumber = await $.get("/api/example/number/updateNumber");
        await this.update(result);
    }
}
