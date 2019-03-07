//Create a regular expression for all white spaces and underscores.
//You will also have to make everything lowercase.
//The tricky part is getting the regular expression part to work, once you do that then just turn the uppercase to lowercase and replace spaces with underscores using replace().

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
