export type Frame = string[][];

export function render(frame: Frame) {
    console.clear();
    for (const row of frame) {
        for (const col of row) {
            process.stdout.write(col);
        }
        process.stdout.write("\n");
    }
}