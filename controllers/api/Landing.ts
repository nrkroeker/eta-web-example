import * as eta from "../../../../eta";
import * as db from "../../../../db";

@eta.mvc.route("/api/example/Landing")
@eta.mvc.controller()
export default class ApiLandingController extends eta.IHttpController {
    @eta.mvc.raw()
    @eta.mvc.get()
    public async getUserType():Promise<void> {
        const userTypes: string[] = ['Student', 'Director', 'Professor', 'Manager'];
        this.res.raw = {userType: userTypes[Math.floor(Math.random() * userTypes.length)]};
    }
}
