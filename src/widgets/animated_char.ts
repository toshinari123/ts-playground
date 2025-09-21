import { sleep } from "bun";
import { loop } from "../hooks";
import { Widget } from "../widget";
import { range } from "../utils/array_utils";
import { Text } from "./text";
import { Column } from "./column";

export class AnimatedChar extends Widget {
    elapsedTicks: number = 0;
    width: number = 10;

    constructor(width: number) {
        super();
        this.width = width;
        loop(async () => {
            await sleep(15);
            this.elapsedTicks += 1;
        });
    }

    build(): Widget {
        const constrainedTicks = this.elapsedTicks <= 180 ? this.elapsedTicks : 180;
        const c = Math.sin(constrainedTicks * Math.PI / 180);
        const index =  Math.floor(c * (this.width - 1));
        let s = range(this.width).map(i => i === index ? "⚪️" : " ");
        return new Column([new Text(s.join("")), new Text(index.toString())]);
    }
}