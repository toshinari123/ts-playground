import { sleep } from "bun";
import { rebuildAfter } from "../hooks";
import { Widget } from "../widget";
import { Text } from "./text";

export class LoadString extends Widget {
    s: string = "Loading";

    constructor() {
        super();
        rebuildAfter(async () => {
            await sleep(2000);
            this.s = "Done!";
        });
    }

    build(): Widget {
        return new Text(this.s);
    }
}