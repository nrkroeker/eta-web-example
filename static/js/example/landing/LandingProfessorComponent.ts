import LandingContentComponent from "./LandingContentComponent.js";


export default class LandingProfessorComponent extends LandingContentComponent {

    public output(): void {
        console.log("professor initialized");
    }

    public async init(): Promise<void> {
        await super.init()
        this.output();
    }
}
