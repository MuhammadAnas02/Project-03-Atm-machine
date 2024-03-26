#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000;  //current balance
let myPin = 2345;

let pinCode = await inquirer.prompt([{
    name: "pinNumber",
    message: "Enter your pin",
    type: "number"
},]);

if(myPin === pinCode.pinNumber){
   let check = await inquirer.prompt([{
    name:"operator",
    type: "list",
    message:"What do you want",
    choices:["currentBalance","Witdraw","fastcard"]
   },]);
if(check.operator === "Witdraw"){
    let leftBalance = await inquirer.prompt([{
      name:"withdraw",
      type: "number",
      message: "Enter your amount"
    },
]);
if(myBalance < leftBalance.withdraw){
    console.log("You WithDraw maximum 10000!");
    
}else{
myBalance -= leftBalance.withdraw
console.log(`your remaining balance is ${myBalance}`);
}

    
      
  }
  else if(check.operator === "fastcard"){
    let fastamount = await inquirer.prompt({
        name:"amounts",
        type: "list",
        message:"select your aamount",
        choices: ["2000","4000","6000","8000","10000",],

    },);
    myBalance -= fastamount.amounts
    console.log(`your remaining balance is ${myBalance}`);
    
    
  }

else if(check.operator ==="currentBalance"){
    console.log(`Your Current Balance is ${myBalance}`);
    
}
    


}
else{
    console.log("Please enter your correct pin");
    
}
