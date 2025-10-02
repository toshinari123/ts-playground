import { render } from "./render";
import { AnimatedChar } from "./widgets/animated_char";
import { Column } from "./widgets/column";
import { Counter } from "./widgets/counter";
import { LoadString } from "./widgets/load_number";
import { MultiAnimatedChar } from "./widgets/multi_animated_char";
import { TextSlideshow } from "./widgets/text_slideshow";

(async () =>
    await render(
        new Column([
            new MultiAnimatedChar(),
            new TextSlideshow({
                i: 0,
                strings: ["What", "have", "you", "done"],
            }),
        ])
    ))();
