import LandingContentComponent from "./LandingContentComponent.js";
import RandomNumberComponent from "../../dynamic/randomNumber.js";


export default class LandingStudentComponent extends LandingContentComponent {
    // private rand: RandomNumberComponent;
    public output(): void {
        console.log("student loaded");
    }

    // public async init(): Promise<void> {
        // this.rand = new RandomNumberComponent("/dynamic/randomNumber", $("#randomNumber"));
    //     await super.init();
    //     this.output();
    // }

    // public async load(): Promise<void> {
    //     await super.load();
    //     await this.rand.init();
    //     await this.rand.load();
    //     this.rand.render();
    //     $(document).on("click", "#fetch", () => {
    //         this.fetch();
    //     });
    // }

    // public async fetch(): Promise<void> {
    //     this.rand.update(await $.get({
    //         url: "/api/example/number/updateNumber"
    //     }));
    //     this.rand.render();
    // }
}
