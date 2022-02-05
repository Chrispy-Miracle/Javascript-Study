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

