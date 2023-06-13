/*

    12345;
    2345;
    345;
    45;
    5;

*/

let result = "";
let c = 0;
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    result = result + (j + 1);
  }
  console.log(result.slice(c));
  ("\n");
  c++;
  result = "";
}
