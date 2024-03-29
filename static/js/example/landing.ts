import * as Delta from "../node_modules/@xroadsed/delta-client/index.js";
import LandingContentComponent from "./landing/LandingContentComponent";
import * as LandingContentTypes from "./landing/index.js";

export class LandingComponent extends Delta.Component {
    LandingContent: LandingContentComponent;

    public async init(): Promise<void> {
        const userType = await $.get({
            url: "/api/example/Landing/getUserType"
        });
        this.LandingContent = await this.getLandingPage(userType.userType);


    }

    private async getLandingPage(type: string): Promise<LandingContentComponent> {
        return new (await SystemJS.import("example/landing/Landing" + type + "Component.js")).default("/landing/" + type);
    }

    public async load(): Promise<void> {
        await super.load();
        await this.LandingContent.init();
        await this.LandingContent.load();
    }
}




export default LandingComponent
