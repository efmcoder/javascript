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
