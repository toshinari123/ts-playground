import { Tabs } from "./widgets/tabs";
import { Widget } from "./widget";
import { Column } from "./widgets/column";
import { Row } from "./widgets/row";
import { LoadString } from "./widgets/load_string";
import { MultiAnimatedChar } from "./widgets/multi_animated_char";
import { TextSlideshow } from "./widgets/text_slideshow";

export class App extends Widget {
    child: Widget;
    constructor() {
        super();
        this.child = new Column([
            new MultiAnimatedChar(),
            new TextSlideshow({
                strings: ["Hello", "darkness", "my", "old", "friend"],
            }),
            new TextSlideshow({
                strings: ["This", "should", "move", "independently"],
            }),
            new Row([
                new TextSlideshow({strings: ["a","b","c","d","e"]}),
                new TextSlideshow({strings: ["a","b","c","d","e"]}),
                new TextSlideshow({strings: ["a","b","c","d","e"]}),
                new TextSlideshow({strings: ["a","b","c","d","e"]}),
            ]),
            new Row([
                new TextSlideshow({strings: ["a","b","c","d","e"]}),
                new TextSlideshow({strings: ["a","b","c","d","e"]}),
                new TextSlideshow({strings: ["a","b","c","d","e"]}),
                new TextSlideshow({strings: ["a","b","c","d","e"]}),
            ]),
        ]);
        this.children = [this.child];
        this.children.forEach((child, index) => {
            child.parent = {widget: this, index};
        })
    }

    build(): Widget {
        return this.child;
    }
}
