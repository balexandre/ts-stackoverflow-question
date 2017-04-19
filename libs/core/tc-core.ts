
import CookiesCore from "./tc-cookies";
var jQuery: JQueryStatic = require("jquery");

export default class TcCore {
    _cookieCore: CookiesCore;
    $: JQueryStatic;

    constructor() {
        this._cookieCore = new CookiesCore();
        this.$ = jQuery;
    }
    public version: string = "v.1.0.0";

    // #################################################################################################
    // cookies feature
    // import CookiesCore from "./sc-cookies";
    add_cookie(name: string, value: string, expires?: number): void {
        this._cookieCore.set_cookie(name, value, expires);
    }
    get_cookie(name: string): string {
        return this._cookieCore.get_cookie(name);
    }
    del_cookie(name: string): void {
        this._cookieCore.del_cookie(name);
    }
}