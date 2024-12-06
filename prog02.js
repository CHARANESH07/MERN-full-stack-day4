function checkInventory(productName, quantity) {
    if (quantity < 10) {
        console.log(`${productName}: Restock Immediately`);
    } else if (quantity >= 10 && quantity <= 20) {
        console.log(`${productName}: Stock is Low`);
    } else {
        console.log(`${productName}: Adequate stock`);
    }
}
function atmWithdrawal(balance, amount) {
   
    if (amount % 10 !== 0) {
        return "Error: Amount must be in multiples of 10.";
    }

    if (amount > 500) {
        return "Error: Maximum withdrawal limit is $500.";
    }
  
    if (balance < amount) {
        return "Error: Insufficient funds.";
    }
    
    return `Success: You have withdrawn $${amount}. Remaining balance: $${balance - amount}.`;
}
let yearsOfExperience = 4;
let performanceScore = 97;
let salary = 50000; 

let bonusPercentage = (yearsOfExperience > 5 && performanceScore > 8) ? 20 :
                      (yearsOfExperience > 3 && yearsOfExperience <= 5 && performanceScore > 7) ? 10 : 5;

let bonus = (bonusPercentage / 100) * salary;
console.log(`Employee bonus: ${bonusPercentage}% ($${bonus})`);

checkInventory("Widget", 8);   // Output: Widget: Restock Immediately
checkInventory("Gadget", 15);  // Output: Gadget: Stock is Low
checkInventory("Tool", 25);    // Output: Tool: Adequate stock
let balance = 1000;
let amount = 200;

console.log(atmWithdrawal(balance, amount));  // Output: Success: You have withdrawn $200. Remaining balance: $800.

amount = 550;
console.log(atmWithdrawal(balance, amount));  // Output: Error: Maximum withdrawal limit is $500.

amount = 123;
console.log(atmWithdrawal(balance, amount));  // Output: Error: Amount must be in multiples of 10.

amount = 1200;
console.log(atmWithdrawal(balance, amount));  // Output: Error: Insufficient funds.
