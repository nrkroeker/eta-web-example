import * as Delta from "../node_modules/@xroadsed/delta-client/index.js";

interface RandomNumber {
    rand: number;
}

export default class RandomNumberComponent extends Delta.DynamicComponent<RandomNumber> {
    rand: RandomNumber;

    public update(props: RandomNumber) {
        this.rand = props;
        super.update(this.rand);
    }

    public async load(): Promise<void> {
        const result: RandomNumber = await $.get("/api/example/number/updateNumber");
        console.log(this);
        await this.update(result);
    }
}
