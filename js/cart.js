const showCart =() =>{
  const orders=JSON.parse(sessionStorage.getItem("orders"));

  orders.forEach(element , index => {
    document.querySelector("#list").innerHTML += <li>${element["name"]}</li>
  });
};