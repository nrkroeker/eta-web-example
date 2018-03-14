import * as Delta from "../node_modules/@xroadsed/delta-client/index.js";
import RandomNumberComponent from "../dynamic/randomNumber.js";

export class IndexComponent extends Delta.Component {

    private rand: RandomNumberComponent;

    public async init(): Promise<void> {
        await super.init();
        let randomNumTemplate = await RandomNumberComponent.getTemplate("/dynamic/randomNumber");
        this.rand = new RandomNumberComponent("/dynamic/randomNumber", "#rand-container", randomNumTemplate);
    }

    public async load(): Promise<void> {
        await super.load();
        await this.rand.load();

        $(document).on("click", "#fetch", () => {
            this.fetch();
        });
    }

    public async fetch(): Promise<void> {
        this.rand.update(await $.get({
            url: "/api/example/number/updateNumber"
        }));
    }
}

export default IndexComponent
