import * as eta from "../../../../eta";
import * as db from "../../../../db";

@eta.mvc.route("/api/example/Log")
@eta.mvc.controller()
export default class ApiLogController extends eta.IHttpController {
    @eta.mvc.raw()
    @eta.mvc.get()
    public async getLogs():Promise<void> {
        this.res.raw = [
            {
                body: "Here's a log from far away"
            },
            {
                body: "Another log from far away in the other direction"
            }
        ];
    }
}
