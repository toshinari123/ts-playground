import type { Frame } from "./frame.ts";

export interface Element {
    draw(): Frame;
}

export function render(frame: Frame) {
    console.clear();
    for (const row of frame) {
        for (const col of row) {
            process.stdout.write(col);
        }
        process.stdout.write("\n");
    }
}

export interface Widget {
    createElement(): Element;
    build(): Widget;
}
