import fs from "fs/promises";

const buffer = await fs.readFile("file-syteam.mjs")

console.info(buffer.toString())

fs.writeFile("temp.txt",'asepmaguire')