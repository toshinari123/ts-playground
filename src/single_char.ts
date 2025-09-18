import type { Element, Widget } from "./widget";
import { CharElement } from "./char_element";

export class SingleChar implements Widget {
    c: string = " ";

    constructor(c: string) {
        if (c[0]) {
            this.c = c[0];
        }
    }

    createElement(): Element {
        return new CharElement(this.c);
    }

    build(): Widget {
        return null as any;
    }
}
