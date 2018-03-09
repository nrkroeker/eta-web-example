import * as Delta from "../node_modules/@xroadsed/delta-client/index.js";
import RandomNumberComponent from "../dynamic/randomNumber.js";

export class IndexComponent extends Delta.Component {

    private rand: RandomNumberComponent;

    public async init(): Promise<void> {
        await super.init();
        let randomNumTemplate = await RandomNumberComponent.getTemplate("/dynamic/randomNumber");
        this.rand = new RandomNumberComponent("/dynamic/randomNumber", "#rand-container", randomNumTemplate);
        await this.rand.init();
    }

    public async load(): Promise<void> {
        this.render();
        await this.rand.load();
        this.rand.render();

        $(document).on("click", "#fetch", () => {
            this.fetch();
        });
    }

    public async fetch(): Promise<void> {
        this.rand.update(await $.get({
            url: "/api/example/number/updateNumber"
        }));
        this.rand.render();
    }

}

export default IndexComponent
