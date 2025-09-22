import { Element, Widget } from "../widget";
import { CharElement } from "../elements/char_element";
import { unimplemented } from "../utils/todo";

export class SingleChar extends Widget {
    c: string = " ";

    constructor(c: string) {
        super();
        if (c[0]) {
            this.c = c[0];
        }
    }

    override createElement(): Element {
        return new CharElement(this.c);
    }

    build(): Widget {
        return unimplemented();
    }
}
