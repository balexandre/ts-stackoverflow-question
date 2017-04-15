import TcCore from "./../core/tc-core";

export default class TcClient extends TcCore {
    constructor() {
        super();
        console.log("js loaded with sc-core %s", this.version);
    }
}