import TcCore from "./../core/tc-core";

export default class TcClient extends TcCore {
    constructor() {
        super();
        console.log("js loaded with tc-core %s", this.version);
    }
}