
var JsCookie: Cookies.CookiesStatic = require("js-cookie");

export default class CookiesCore {

    /**
     * Gets a cookie from the client browser
     * @param  {string} name Cookie name
     * @returns string
     */
    get_cookie(name: string): string {
        return JsCookie.get(name);
    }

    /**
     *  Adds a cookie to the client browser
     * @param  {string} name Cookie name
     * @param  {string} value Cookie value
     * @param  {number} expires? Expire time in days <@default 30 days>
     * @returns void
     */
    set_cookie(name: string, value: string, expires?: number): void {
        if (typeof (expires) === "number") {
            JsCookie.set(name, value, { expires: expires });
        } else {
            JsCookie.set(name, value);
        }
    }

    /**
     * Deletes the cookie from the client browser
     * @param  {string} name Cookie name
     * @returns void
     */
    del_cookie(name: string): void {
        JsCookie.remove(name);
    }
}