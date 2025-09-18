import { type Widget, type Element, onClick } from "./widget";
import { CharElement } from "./char_element";
import { SingleChar } from "./single_char";

export class Counter implements Widget {
    i: number = 0;

    constructor(i: number) {
        this.i = i;
    }

    createElement(): Element {
        return this.build().createElement();
    }

    build(): Widget {
        onClick((c) => {
            switch (c) {
                case "+":
                    this.i += 1;
                    break;
                case "-":
                    this.i -= 1;
                    break;
            }
        });
        return new SingleChar(this.i.toString());
    }
}
