import * as Delta from "node_modules/@xroadsed/delta-client/index.js";

interface RandomNumber {
    rand: number;
}

export default class RandomNumberComponent extends Delta.DynamicComponent<RandomNumber> {
    public async load(): Promise<void> {
        const result: RandomNumber = await $.get("/api/example/number/updateNumber");
        await super.load(result);
    }
}
