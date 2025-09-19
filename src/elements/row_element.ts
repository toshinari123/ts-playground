import { Element } from "../widget";
import type { Frame } from "../frame";
import { ensureSameLength, range } from "../utils/array_utils";

export class RowElement implements Element {
    children: Element[] = [];

    constructor(children: Element[]) {
        this.children = children;
    }

    draw(): Frame {
        const childrenFrames = ensureSameLength(
            this.children.map((child) => child.draw()),
            []
        ).map((frame) => ensureSameLength(frame, " "));
        return range(childrenFrames[0]?.length ?? 0).map((i) =>
            childrenFrames.map((frame) => frame[i]!).flat()
        );
    }
}