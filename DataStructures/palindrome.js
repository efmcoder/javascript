//A palindrom is a wor or sentence that's spelled the same forward and backword

function palindrome(str) {
  return str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

console.log(palindrome("eye"));
