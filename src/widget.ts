import type { Frame } from "./frame.ts";

export abstract class Element {
    abstract draw(): Frame;
}

export abstract class Widget {
    /** @virtual */
    createElement(): Element {
        return this.build().createElement();
    }
    abstract build(): Widget;
}
