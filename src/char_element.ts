import type { Frame } from "./frame";

export class CharElement {
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
