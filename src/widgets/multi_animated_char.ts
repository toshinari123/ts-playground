import { onKeypress } from "../hooks";
import { range } from "../utils/array_utils";
import { Widget } from "../widget";
import { AnimatedChar } from "./animated_char";
import { Column } from "./column";
import { Text } from "./text";

export class MultiAnimatedChar extends Widget {
    i: number = 1;

    constructor() {
        super();
        onKeypress((event) => {
            switch (event.sequence) {
                case "+":
                    this.i += 1;
                    break;
                case "-":
                    this.i -= 1;
                    break;
            }
        })
    }

    build(): Widget {
        return new Column([
            ...range(this.i).map(i => new AnimatedChar(30)),
            new Text(this.i.toString())
        ]);
        // TODO: does not work. Animations will reset on every rebuild due to this build() creating new AnimatedChars
    }
}