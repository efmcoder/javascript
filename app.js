var randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
var eightball = ""; //we will save a value to this l8r, depending on the value of randomNumber


if (randomNumber === 0) {
  console.log ("borrow his car");
} else if (randomNumber === 1) {
  console.log("job");
} else if (randomNumber === 2) {
  console.log("walk");
} else if (randomNumber === 3) {
  console.log("run");
} else if (randomNumber === 4) {
  console.log("borrow my car");
} else if (randomNumber === 5) {
  console.log("hitch a ride");
} else if (randomNumber === 6) {
  console.log("steal a car");
} else if (randomNumber === 7) {
  console.log("be a scrub");
} else if (randomNumber === 8) {
  console.log("buy me gifts with mine");
};



switch (randomNumber) {
  case 0:
  eightball = "It is certain";
    break;

  case 1:
  eightball = "It is decidedly so";
    break;

    case 2:
    eightball = "Reply hazy try again";
      break;

      case 3:
      eightball = "Cannot predict now";
        break;

        case 4:
        eightball = "Do not count on it";
          break;

          case 5:
          eightball = "My sources say no";
            break;

            case 6:
            eightball = "Outlook not so good";
              break;

              case 7:
              eightball = "Signs say yes";
                break;
}

console.log(eightball);
