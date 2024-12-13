function manageInventory(products) {
    const lowStockProducts = products.filter(product => product.stock < 100);
  
    const reorderCosts = lowStockProducts.map(product => {
      const reorderAmount = 100 - product.stock;
      const totalCost = reorderAmount * product.pricePerUnit;
      return { category: product.category, totalCost };
    });
  
    const totalReorderCosts = reorderCosts.reduce((acc, { category, totalCost }) => {
      acc[category] = (acc[category] || 0) + totalCost;
      return acc;
    }, {});
  
    const sortedReorderCosts = Object.entries(totalReorderCosts)
      .sort((a, b) => b[1] - a[1])  
      .reduce((obj, [category, cost]) => {
        obj[category] = cost;
        return obj;
      }, {});
  
    return sortedReorderCosts;
  }
  const products = [
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },
    { name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },
    { name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },
    { name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },
    { name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 }
  ];
  
  console.log(manageInventory(products));
  