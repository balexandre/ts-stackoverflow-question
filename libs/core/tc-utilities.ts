
export default class TcUtilitiesCore {
    // http://patrickdesjardins.com/blog/typescript-cast-of-string-to-number

    /**
     * Tries to convert a string into a number, returns default number if string can't be converted
     * @param  {string} str The string to be converted
     * @param  {number} defaultValue The default number
     * @returns number
     */
    public tryParseInt(str: string, defaultValue: number): number {
        var retValue: number = defaultValue;
        if (str !== null) {
            if (str.length > 0) {
                if (!isNaN(+str)) {
                    retValue = parseInt(str, 10);
                }
            }
        }
        return retValue;
    }
}