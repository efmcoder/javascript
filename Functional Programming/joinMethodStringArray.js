var arr = ["Hello", "World"];
var str = arr.join(" ");
console.log(str);

//FCC QUESTION
function sentensify(str) {

return str.split(/\W/).join(' ');

}
console.log(sentensify("May-the-force-be-with-you"));
