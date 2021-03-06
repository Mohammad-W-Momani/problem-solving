console.log("Problem Solving Q: 4 ");

/* Codeland Username Validation */

/*  
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

function CodelandUsernameValidation(str) {
  return (
    str.length > 3 &&
    str.length < 26 &&
    str[0].toLowerCase() != str[0].toUpperCase() &&
    !!/^(\w|\|-)+$/.test(str) &&
    str[str.length - 1].match() !== "_"
  );
}

/*  


Examples:
CodelandUsernameValidation('aa_'); // => false
CodelandUsernameValidation('u__hello_world123'); // => true

*/
