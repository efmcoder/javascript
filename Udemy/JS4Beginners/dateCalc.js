//CALCULATES POLICY LIFE IN MONTHS WHEN YOU HAVE START AND END DATES
var startDate = 43466; //User Input
var endDate = 43830; //User Input
console.log((endDate - startDate)/28-1) //Calculation

//RETURNS END DATE IF YOU INPUT START DATE AND POLICY LIFE
var startDate = 43466; //User Input
var years = 5; //User Input
var time = years * 365; //System. If 1 year, then 365-1 days
var endDate = startDate+time; //System
console.log(endDate);//System
