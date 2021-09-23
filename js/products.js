const orders =[

];
document.querySelector(".addToCart").addEventListener("click", function(){
  orders.push(
    {
      name:"avocado",
      price:50,
      qty:5
    }
    
  )
  sessionStorage.setItem("orders",JSON.stringify(orders));
});

