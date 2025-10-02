import type { Frame } from "./frame.ts";

export abstract class Element {
    abstract draw(): Frame;
}

export abstract class Widget {
    prev: Widget | null = null;
    needsRebuild: boolean = true;

    createElement(): Element {
        return this._build().createElement();
    }
    setState(f: () => void) {
        f();
        this.needsRebuild = true;
    }
    _build(): Widget {
        if (!this.needsRebuild && this.prev) {
            return this.prev;
        }
        this.needsRebuild = false;
        this.prev = this.build();
        return this.prev;
    }
    abstract build(): Widget;
}
