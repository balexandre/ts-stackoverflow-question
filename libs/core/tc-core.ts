import CookiesCore from "./tc-cookies";
import UtilitiesCore from "./tc-utilities";

var jQuery: JQueryStatic = require("jquery");

export default class TcCore {
    private _cookiesCore: CookiesCore;
    public _utilities: UtilitiesCore;
    public $: JQueryStatic;

    constructor() {
        this._cookiesCore = new CookiesCore();
        this._utilities = new UtilitiesCore();
        this.$ = jQuery;
    }
    public version: string = "v.1.0.0";

    // #################################################################################################
    // cookies feature wrapper
    // import CookiesCore from "./sc-cookies";
    add_cookie(name: string, value: string, expires?: number): void {
        this._cookiesCore.set_cookie(name, value, expires);
    }
    get_cookie(name: string): string {
        return this._cookiesCore.get_cookie(name);
    }
    del_cookie(name: string): void {
        this._cookiesCore.del_cookie(name);
    }
}