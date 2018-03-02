import * as eta from "../../../../eta";
import * as db from "../../../../db";

@eta.mvc.route("/api/example/number")
@eta.mvc.controller()
export default class ApiNumberController extends eta.IHttpController {
    @eta.mvc.raw()
    @eta.mvc.get()
    public async updateNumber():Promise<void> {
        this.res.raw = {rand: Math.floor(Math.random() * (100 - 0 + 1))};
    }
}
