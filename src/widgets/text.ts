import { Widget } from "../widget";
import { Row } from "./row";
import { SingleChar } from "./single_char";

export class Text extends Widget {
    s: string = "";

    constructor(s: string) {
        super();
        this.s = s;
    }

    build(): Widget {
        return new Row([...this.s].map((char) => new SingleChar(char)));
    }
}
