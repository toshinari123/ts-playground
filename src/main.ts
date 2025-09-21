import { LoadString } from "./widgets/load_number";
import { render, setup } from "./render";
import { AnimatedChar } from "./widgets/animated_char";
import { MultiAnimatedChar } from "./widgets/multi_animated_char";

(async () => {
    setup();
    await render(new AnimatedChar(40));
})();
