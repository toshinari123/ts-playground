function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
    while (true) {
        console.log("Hi");
        await sleep(1000);
    }
})();
