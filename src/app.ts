import { Tabs } from "./widgets/tabs";
import { Widget } from "./widget";
import { Column } from "./widgets/column";
import { LoadString } from "./widgets/load_string";
import { MultiAnimatedChar } from "./widgets/multi_animated_char";
import { TextSlideshow } from "./widgets/text_slideshow";

export class App extends Widget {
    build(): Widget {
        const page1 = new LoadString();
        const page2 = new Column([
            new MultiAnimatedChar(),
            new TextSlideshow({
                strings: ["Hello", "darkness", "my", "old", "friend"],
            }),
        ]);
        return new Tabs({
            initialTab: 1,
            pages: [
                {
                    name: "Page 1",
                    content: page1,
                },
                {
                    name: "Page 2",
                    content: page2,
                },
            ],
        });
    }
}
