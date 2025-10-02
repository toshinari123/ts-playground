import { ColumnElement } from "../elements/column_element";
import { unimplemented } from "../utils/todo";
import { Element, Widget } from "../widget";

export class Column extends Widget {
    prevElement: Element | null = null;
    children: Widget[] = [];

    constructor(children: Widget[]) {
        super();
        this.children = children;
    }

    override createElement(): Element {
        return new ColumnElement(
            this.children.map((child) => child.createElement())
        );
    }

    build(): Widget {
        return unimplemented();
    }
}
