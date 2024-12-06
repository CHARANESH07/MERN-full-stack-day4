function checkInventory(productName, quantity) {
    if (quantity >= 21) {
      console.log("Adequate stock for " + productName);
    } else if (quantity >= 10 && quantity <= 20) {
      console.log("Stock is low for " + productName + ". Please replenish.");
    } else {
      console.log("Critical stock level for " + productName + ". Immediate replenishment needed.");
    }
  }
  
  checkInventory("Product A", 15); 
  checkInventory("Product B", 30);
  checkInventory("Product C", 5);