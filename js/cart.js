const showCart =() =>{
  // get the cart from session storage
  const orders = (sessionStorage.getItem("cart")? JSON.parse(sessionStorage.getItem("cart")): []);

  // dispplay item from cart to a table
  orders.forEach((element , index) => {
    document.querySelector("#orders").innerHTML += `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${element.itemName}</td>
        <td>${element.qty}</td>
        <td>${element.unitPrice}</td>
        <td>${element.subTotal}</td>
      </tr>
    `;
  });
};