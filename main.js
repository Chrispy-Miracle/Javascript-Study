console.log("This is a console.log() of a string");

var variable= "old way of variables";
let variableInCamelCase = "variable";
const WIDTH = 600;
let doesIt = true;
const jsScript = "<script src='main.js'></script>"

document.getElementById("variables").innerHTML= variable + ", " + variableInCamelCase +", " + WIDTH + ", " + doesIt;
document.getElementById("js").textContent = jsScript;

function ahoy(){
    alert("Ahoy!! Consider yourself alerted!");
};

const arrowFunc = () => {console.log("This string came from the function named 'arrowFunc' ")};
arrowFunc();

let arg = String("argument");
console.log(arg);
document.getElementById("argument").textContent = arg;

num = 65;
num1 = 126;
num2= 75;
let unicodeString = String.fromCharCode(num, num1, num2);
document.getElementById("unicodeStr").textContent = unicodeString;

num3 = 0x4905;
num4 = 45;
num5= 0x9804;
let codePointString = String.fromCharCode(num3, num4, num5);
document.getElementById("codePtStr").textContent = codePointString;

let rawStr = String.raw`/bust/Raw/Dawg`;
console.log(`Yo, this is a rawStr: ${rawStr}`);
document.getElementById("raw").textContent= `Yo, this is a rawStr: ${rawStr}`;

document.getElementById("length").textContent = `unicodeString:  ${unicodeString}, unicodeString.length:  ${unicodeString.length}`;
console.log(`unicodeString:  ${unicodeString}, unicodeString.length:  ${unicodeString.length}`);

document.getElementById("at").textContent = arg.at(3);
document.getElementById("atNeg").textContent = arg.at(-1);
document.getElementById("charCodeAt").textContent = arg.charCodeAt(2);
document.getElementById("codePointAt").textContent = arg.codePointAt(3);
document.getElementById("concat").textContent = arg.concat(" ", variableInCamelCase, " ", rawStr);
document.getElementById("endsWith").textContent = rawStr.endsWith("Dawg");
document.getElementById("includes").textContent = rawStr.includes("RAW");
document.getElementById("indexOf").textContent = variable.indexOf("way");
document.getElementById("indexOf2").textContent = variable.indexOf("bay");
document.getElementById("lastIndexOf").textContent = variable.lastIndexOf("a");
document.getElementById("lastIndexOf2").textContent = variable.lastIndexOf("z");

let ogString = "abra";
let strToCompare = "cadabra";
document.getElementById("localCompare").textContent = ogString.localeCompare(strToCompare);
document.getElementById("match").textContent = ogString.match(/bra/);
document.getElementById("match2").textContent = ogString.match(/a/g);

let regex = /t(e)(st(\d?))/g
let string = "test1test2";
console.log([...string.matchAll(regex)]);
document.getElementById("matchAll").textContent = [...string.matchAll(regex)][0];
document.getElementById("matchAll2").textContent = [...string.matchAll(regex)][1];

let padder = "Pad it up!";
let padEnd = padder.padEnd(20, ".");
let padEnd2 = padder.padEnd(20, "1234");
document.getElementById("padEnd").textContent = padEnd;
document.getElementById("padEnd2").textContent = padEnd2;

let padStart = padder.padStart(20, "-");
let padStart2 = padder.padStart(20, "dog");
document.getElementById("padStart").textContent = padStart;
document.getElementById("padStart2").textContent = padStart2;

let repeatThis = "Say it again.  "
document.getElementById("repeat").textContent = repeatThis.repeat(5);

let re = /(Say)\s(it)/;
console.log(repeatThis.replace(re, "Tell me"));
document.getElementById("replace").textContent = repeatThis.replace(re, "Tell me");
console.log(repeatThis.replace(re, '$2, $1'));
document.getElementById("replace2").textContent = repeatThis.replace(re, '$2, $1');

let sentence = "This is a sentence we are going to search through.";
let regExp = /search/;
let nope = /nope/;
//this will search and tell you the index
console.log(sentence.search(regExp));
document.getElementById("search").textContent = (sentence.search(regExp));
//this is checking the value at the search results' index.
console.log(sentence[sentence.search(regExp)]);
document.getElementById("search2").textContent = (sentence[sentence.search(regExp)]);
//this is a failed search
document.getElementById("search3").textContent = (sentence.search(nope));
console.log(sentence.search(nope));

console.log(sentence.slice(19, 31));
document.getElementById("slice").textContent = (sentence.slice(19, 31));
console.log(sentence.slice(-8));
document.getElementById("slice2").textContent = (sentence.slice(-8));

document.getElementById("split").textContent = sentence.split();
console.log(sentence.split());
document.getElementById("split2").textContent = sentence.split('');
console.log(sentence.split(''));
document.getElementById("split3").textContent = sentence.split(' ');
console.log(sentence.split(' '));

document.getElementById("startsWith").textContent = sentence.startsWith('This');
document.getElementById("startsWith2").textContent = sentence.startsWith('sentence');
document.getElementById("startsWith3").textContent = sentence.startsWith('sentence', 10);

let whaleThen = "Blue Whale";
document.getElementById("substring").textContent = whaleThen.substring(5);
document.getElementById("substring2").textContent = whaleThen.substring(0, 4);

document.getElementById("localeLower").textContent = whaleThen.toLocaleLowerCase('fr-CA');
document.getElementById("localeLower2").textContent = "Mañana".toLocaleLowerCase('en-US');

document.getElementById("localeUpper").textContent = whaleThen.toLocaleUpperCase('fr-CA');
document.getElementById("localeUpper2").textContent = "Mañana".toLocaleUpperCase('en-US');

let lower = "LOWERCASE"
document.getElementById("lower").textContent = lower.toLowerCase();
console.log(lower.toLowerCase());

let upper = "uppercase"
document.getElementById("upper").textContent = upper.toUpperCase();
console.log(upper.toUpperCase());

let stringObject = new String('Object becomes string');
console.log(stringObject);
document.getElementById("toString").textContent = stringObject;
console.log(stringObject.toString());
document.getElementById("toString2").textContent = stringObject.toString();

let yoyo = "     yo yo yo       ";
document.getElementById("trim").textContent = "Yo" + yoyo.trim() + ", we are going to trim this.";
document.getElementById("noTrim").textContent = "Yo" + yoyo + ", we are not going to trim this.";
console.log(yoyo);
console.log("Yo" + yoyo.trim() + ", we are going to trim this.");
console.log("Yo" + yoyo + ", we are not going to trim this.");

console.log("Yo" + yoyo.trimEnd() + ", we are going to trim the end of this.");

console.log("Yo" + yoyo.trimStart() + ", we are going to trim the start of this.");

console.log(stringObject.valueOf());

let replaceAllOfThis = "Replace most of most of this.";
document.getElementById("replaceAll").textContent = replaceAllOfThis.replaceAll('most', 'all');



