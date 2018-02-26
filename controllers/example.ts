import * as eta from "../eta";
import * as db from "../db";

@eta.mvc.route("/")
@eta.mvc.controller()
export default class ExampleController extends eta.IHttpController {
    @eta.mvc.flags({
        "spaRoute": "/example" // mark this as a SPA
    })
    @eta.mvc.get()
    public async example(): Promise<void> { }
}
