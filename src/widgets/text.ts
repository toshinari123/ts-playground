import { Widget } from "../widget";
import { Column } from "./column";
import { Row } from "./row";
import { SingleChar } from "./single_char";

export class Text extends Widget {
    s: string = "";

    constructor(s: string) {
        super();
        this.s = s;
    }

    build(): Widget {
        return new Column(
            this.s
                .split("\n")
                .map(
                    (line) =>
                        new Row([...line].map((char) => new SingleChar(char)))
                )
        );
    }
}
