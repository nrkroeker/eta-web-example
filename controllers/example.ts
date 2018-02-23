import * as eta from "../eta";
import * as db from "../db";

@eta.mvc.route("/")
@eta.mvc.controller()
export default class XController extends eta.IHttpController {
    @eta.mvc.flags({
        "spaRoute": "/x" // mark this as a SPA
    })
    @eta.mvc.get()
    public async x(): Promise<void> { }
}
