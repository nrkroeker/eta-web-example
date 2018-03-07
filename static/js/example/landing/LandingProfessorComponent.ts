import LandingContentComponent from "./LandingContentComponent.js";


export default class LandingProfessorComponent extends LandingContentComponent {

    public output(): void {
        console.log("professor loaded");
    }

    public async init(): Promise<void> {
        await this.getView();
        this.output();
    }
}
