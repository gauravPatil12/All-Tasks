/*

    *
    **
    ***
    ****
    *****

*/

let result = "";
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    result = result + "*";
  }
  console.log(result);
  ("\n");
  result = "";
}
