function SamplePromise() {
    return Promise.resolve('AsepMaguire');
}

const name = await SamplePromise();
console.info(name);