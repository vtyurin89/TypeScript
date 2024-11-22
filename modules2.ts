import { toJson } from 'really-relaxed-json'
import { a } from './modules';

const rjson = '[ one two three {foo: bar} ]'
const myJson = toJson(rjson);

console.log(myJson);