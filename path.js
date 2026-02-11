import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
console.log(import.meta.url)
console.log (__filename)
console.log("File Name : ", path.basename(__filename))
console.log("Directory Name : ", path.dirname(__filename))
console.log("File Extension : ", path.extname(__filename))
console.log("Path Object : ", path.parse(__filename))
