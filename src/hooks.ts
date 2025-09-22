import { exit } from "./render";

export type KeyEvent = {
    sequence: string;
    name: string;
    ctrl: boolean;
    meta: boolean;
    shift: boolean;
};

let rebuildFlag = true;

export let shouldRebuild = () => rebuildFlag;
export let rebuild = () => {
    rebuildFlag = true;
};
export let resetShouldRebuild = () => {
    rebuildFlag = false;
};

let onKeypressCbs: ((event: KeyEvent) => void)[] = [];
export function consumeOnKeypressCbs(event: KeyEvent) {
    onKeypressCbs.forEach((cb) => cb(event));
}

export function onKeypress(cb: (event: KeyEvent) => void) {
    onKeypressCbs.push(cb);
}

process.stdin.on("keypress", (str: string, event: KeyEvent) => {
    if (event.sequence === "\u0003") {
        exit();
    }
    // console.log(event);
    consumeOnKeypressCbs(event);
    rebuild();
});

export function rebuildAfter(f: (() => void) | (() => Promise<void>)) {
    const a = f();
    if (a instanceof Promise) {
        a.then(rebuild);
    } else {
        rebuild();
    }
}

export function loop(f: () => Promise<void>) {
    f().then(() => {
        rebuild();
        loop(f);
    });
}