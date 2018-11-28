//#1: Return
function timesFive(num){
  return num * 5;
}
console.log(timesFive(5));

//#2: Testing strict comparison ===
function testStrict(val){
  if (val === 7){
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(7));
//#3.
console.log("#3 done");

//4. Practice comparing different values
function compareEquality(a,b){
  if(a===b){
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10,"10"));
//ANSWER = NOT EQUAL IF 10,"10"

//#5: Inequality Operator !=
function testNotEqual(val){
  if (val !=99){
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(99));

//#6. Strict Inequality !==
function testStrictNotEqual(val){
  if (val !==17){
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual(77));

//#7 Comparison with Greater Than
function testGreaterThan(val){
  if (val > 100) {
  return "100 or over 100";
  }
  if (val > 10) {
return "Over 10 but less than 100";
  }
return "10 or under";
}
console.log(testGreaterThan(55));

//#8 Comparison with Greater Than or Equal to
function greaterThanorEqualTo(val){
  if (val =>10){
    return "Greater Than or Equal to 10";
  }
  if (val <=100){
    return "Less than or Equal to 100";
  }
  return "Less than 10";
}
console.log(greaterThanorEqualTo(12));

//#9 & #10 Comparison with Less Than or Equal to
function lessThanOrEqualTo(val){
  if (val <=100){
    return "Less than or Equal to 100";
  }
  if (val <=10){
    return "Less than or Equal to 10";
  }
  return "Over 100";
}
console.log(lessThanOrEqualTo(120));

//#11 Comparison with Logical && Operator
function testLogicalAnd(val){
  if (val >= 25 && val <=50){
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(15));

//#12: Comparisons with Logical || (or) Operator. Returns true if true
function testLogicalOr(val){
  if (val <10 || val >20){
    return "True";
  }
  return "False";
}
console.log(testLogicalOr(15));

//#13: Else Statements
function testElse(val){
  var result = "";
if (val > 5){
  result = "Bigger than 5"; //WHY IS THIS SHOWN AS RESULT
}
else {
  return "5 or smaller"; //WHY IS THIS SHOWN AS RETURN. WHAT'S THE DIFF?
}
return result;
}
console.log(testElse(4));

//#14: Else if Statements
//Convert below statement to elseif
function elseIf(val){
  if (val > 10){
    return "Greater than 10";
  }
  else if (val < 5){
    return "Less than 5";
  }
  else {
    return "between 5 and 10";
  }
}
console.log(elseIf(7));

//#15: Logical Order in if/else statements
function orderMyLogic(val){
  if (val < 5){
    return "Less than 5";
  }
  if (val < 10){
    return "Less than 10";
  }
  return "Greater than 10";
}
console.log(orderMyLogic(1));
console.log(orderMyLogic(7));
console.log(orderMyLogic(12));

//#16: Chaining if else statements
function testSize(val){
  if (val < 5){
    return "Tiny";
  }
  else if (val < 10){
    return "Small";
  }
  else if (val < 15){
    return "Medium";
  }
  else if (val < 20){
    return "Large";
  }
  else{
  return "Huge";
}
}
console.log(testSize(1));
console.log(testSize(8));
console.log(testSize(13));
console.log(testSize(16));
console.log(testSize(75));

//#17: Golf Code:
function golfScore(par, strokes){
  if (strokes ==1){
    return "Hole-in-one!";
  }
  if (strokes <= par -2){
    return "Eagle";
  }
  if (strokes == par -1){
    return "Birdie";
  }
  if (strokes == par){
    return "Par";
  }
  if (strokes == par +1){
    return "Bogey";
  }
  if (strokes == par + 2){
    return "Double Bogey";
  }
  return "Go Home!";
}
console.log(golfScore(5,4));

//#18: Switch Statements
function caseInSwitch(val){
  var answer = ""; //without this, answer still executes
  switch (val){
    case 1:
    return "alpha";
    break;
    case 2:
    return "beta";
    break;
    case 3:
    return "gamma";
    break;
    case 4:
    return "delta";
    break;
  }
  return answer;
}
  console.log(caseInSwitch(1));

//#19: Adding a default option in Switch statements
function caseInSwitch2(val){
  var answer2 = "";
  switch (val){
    case 1:
    return "Alpha2";
    break;
    case 2:
    return "Beta2";
    break;
    case 3:
    return "Gamma2";
    break;
    case 4:
    return "Delta2";
    break;
    default:
    return "Not found";
    break;
  }
  return answer2;
}
console.log(caseInSwitch2(0));
console.log(caseInSwitch2(1));
console.log(caseInSwitch2(2));
console.log(caseInSwitch2(3));
console.log(caseInSwitch2(4));
console.log(caseInSwitch2(5));
console.log(caseInSwitch2(100));
