import { Element, Widget } from "../widget";
import { RowElement } from "../elements/row_element";
import { unimplemented } from "../utils/todo";

export class Row extends Widget {
    //children: Widget[] = [];

    constructor(children: Widget[]) {
        super();
        this.children = children;
        this.children.forEach((child, index) => {
            child.parent = {widget: this, index};
        })
    }

    override createElement(): Element {
        return new RowElement(
            this.children.map((child) => child.createElement())
        );
    }

    build(): Widget {
        return unimplemented();
    }
}
