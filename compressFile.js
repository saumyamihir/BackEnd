// import zlib from 'zlib'
// import fs from 'fs'
// let gzip = zlib.createGzip()
// let r = fs.createReadStream('home.txt')
// let w = fs.createWriteStream('home.txt.gz')
// r.pipe(gzip).pipe(w)



import zlib from 'zlib'
import fs from 'fs'
let gzip = zlib.createGunzip()
let r = fs.createReadStream('home.txt.gz')
let w = fs.createWriteStream('house.txt')
r.pipe(gzip).pipe(w)