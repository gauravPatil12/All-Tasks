/*
    Star Pattern
    *****
    *****
    *****
    *****
    *****
*/

let result = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    result = result + "*";
  }
  console.log(result);
  ("\n");
  result = "";
}
