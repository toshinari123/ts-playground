import { Element, Widget } from "../widget";
import { RowElement } from "../elements/row_element";

export class Row implements Widget {
    children: Widget[] = [];

    constructor(children: Widget[]) {
        this.children = children;
    }

    createElement(): Element {
        return new RowElement(
            this.children.map((child) => child.createElement())
        );
    }

    build(): Widget {
        return null as any;
    }
}
