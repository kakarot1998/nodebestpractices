const fs = require('fs');
const http = require('https');

console.time('math1-no-io');
let da
for(i=0;i<500;i++){
    dataToSave +=Math.random()*i;
}
console.timeEnd('math1-no-io');

console.time('filesave-io');
fs.appendFileSync('file.txt', dataToSave);
const fileContent = fs.readFileSync('file.txt');
console.timeEnd('filesave-io');


console.time('networkcall-io');
http.get('https://google.com', (result)=>{
    console.timeEnd('networkcall-io');
})