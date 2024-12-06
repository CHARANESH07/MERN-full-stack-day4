function atmWithdrawal(balance, amount) {
    // Check if the amount is a multiple of 10
    if (amount % 10 !== 0) {
      return "Error: Amount must be a multiple of 10.";
    }
  
    // Check if the amount is less than or equal to 500
    if (amount > 500) {
      return "Error: Maximum withdrawal amount is 500.";
    }
  
    // Check if the balance is sufficient
    if (amount > balance) {
      return "Error: Insufficient balance.";
    }
  
    // Withdrawal is allowed
    return "Withdrawal successful.";
  }
  
  // Example usage:
  const balance = 1000;
  const amountToWithdraw = 420;
  
  const result = atmWithdrawal(balance, amountToWithdraw);
  console.log(result);