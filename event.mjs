import {EventEmitter} from "events";

const emitter = new EventEmitter();

emitter.addListener('hello', (name) => {
    console.log(`hello ${name}`);
})
emitter.addListener('hello', (name) => {
    console.log(`halo ${name}`);
})

emitter.emit("hello" , "AsepMaguire");