import { render } from "./render";
import { AnimatedChar } from "./widgets/animated_char";
import { Column } from "./widgets/column";
import { Counter } from "./widgets/counter";
import { LoadString } from "./widgets/load_number";
import { TextSlideshow } from "./widgets/text_slideshow";

(async () => {
    await render(new Column([
        new AnimatedChar(40),
        new AnimatedChar(30),
        new Counter(0),
        new TextSlideshow({
            i: 0,
            strings: [
                "What",
                "have",
                 "you",
                 "done"
            ]
        })
    ]));
})();
