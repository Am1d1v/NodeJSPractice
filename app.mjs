

import { printHello, printHi} from "./index.mjs";
import { URL, USERNAME, PASSWORD } from "./index.mjs";
import { season, temperature } from "./index.mjs";
import { isRain, humidity } from "./inlineExports.mjs";
import someInfo from "./defaultExport.mjs";

printHello();

console.log(USERNAME);
console.log(season);
console.log(`isRaining: ${isRain}, humidity now is: ${humidity}`);

someInfo();