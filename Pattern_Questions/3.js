/*    
    
    Number Pattern
    11111
    2222
    333
    44
    5
*/

let result = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5 - i; j++) {
    result = result + (i + 1);
  }
  console.log(result);
  ("\n");
  result = "";
}
