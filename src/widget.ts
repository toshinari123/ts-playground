import type { Frame } from "./frame.ts";
import type { KeyEvent } from "./hooks.ts";
import { onKeypress } from "./hooks";

export abstract class Element {
    abstract draw(): Frame;
}

export abstract class Widget {
    prev: Widget | null = null;
    needsRebuild: boolean = true;

    children: Widget[] = [];
    parent: {widget: Widget, index: number} | null = null;

    focusable: boolean = false;
    keypressCb: ((event: KeyEvent) => void) | null = null;

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

    onKeypress(cb: (event: KeyEvent) => void) {
        if (this.focusable) {
            this.keypressCb = cb;
        } else { 
            onKeypress(cb);
        }
    }
}
