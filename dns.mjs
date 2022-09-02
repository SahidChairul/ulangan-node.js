// import dns from 'dns/promises'

// const ip = await dns.lookup('www.smkassalaambandung.sch.id');

// console.log(ip);

import dns from 'dns/promises'

const addres = await dns.lookup('www.smkassalaambandung.sch.id');

console.log(addres.address);
console.log(addres.family);