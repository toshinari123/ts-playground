import { type Widget, type Element } from "./widget";
import { SingleChar } from "./widgets/single_char";
import { onKeypress } from "./hooks";

export class Counter implements Widget {
    i: number = 0;

    constructor(i: number) {
        this.i = i;
        onKeypress((event) => {
            switch (event.sequence) {
                case "+":
                    this.i += 1;
                    break;
                case "-":
                    this.i -= 1;
                    break;
            }
        });
    }

    createElement(): Element {
        return this.build().createElement();
    }

    build(): Widget {
        return new SingleChar(this.i.toString());
    }
}
