// Math.random() prints random number between 0 and 1.
// let random = Math.random()*100;
let computer = Math.round(Math.random() * 100);

let user;
let score = 0;
while (user != computer) {
  user = Number.parseInt(prompt("Enter number between 0 to 100: "));
  if (user === computer) {
    console.log("You Entered the right number!")
  }
  else if (user <= 100 && user > computer) {
    console.log("apne galat ank chuna hai yah ank bada hai computer isse chota ank chuna hai")
  }
  else if (user >= 0 && user < computer) {
    console.log("apne galat ank chuna hai yah ank chota  hai computer isse bada ank chuna hai")
  }
  else {
    console.log("Please enter number between 0 to 100")
  }
  score++;
}
console.log(`Congratulations! you win the race in ${score} times!`)