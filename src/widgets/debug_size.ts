import { DebugSizeElement } from "../elements/debug_size_element";
import { unimplemented } from "../utils/todo";
import { Element, Widget } from "../widget";

export class DebugSize extends Widget {
    child: Widget;

    constructor(child: Widget) {
        super();
        this.child = child;
    }

    override createElement(): Element {
        return new DebugSizeElement(this.child.createElement());
    }

    build(): Widget {
        return unimplemented();
    }
}