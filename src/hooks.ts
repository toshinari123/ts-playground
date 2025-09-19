export type KeyEvent = {
    sequence: string;
    name: string;
    ctrl: boolean;
    meta: boolean;
    shift: boolean;
};

var onKeypressCbs: ((event: KeyEvent) => void)[] = [];
export function consumeOnKeypressCbs(event: KeyEvent) {
    onKeypressCbs.forEach((cb) => cb(event));
}

export function onKeypress(cb: (event: KeyEvent) => void) {
    onKeypressCbs.push(cb);
}
