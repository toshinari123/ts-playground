import type { Frame } from "./frame";
import type { Element } from "./widget";

export class CharElement implements Element {
    c: string = " ";

    constructor(c: string) {
        if (c[0]) {
            this.c = c[0];
        }
    }

    draw(): Frame {
        return [[this.c]];
    }
}
