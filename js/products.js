
const frm = $('form.order-item');
// get the cart from session storage
const cart = (sessionStorage.getItem("cart")? JSON.parse(sessionStorage.getItem("cart")): []);
let cartTotal = cart.length;
$('#cartTotal').html(cartTotal);

frm.submit(function(event){
  event.preventDefault();
  const formData = new FormData(this);

  // create an orer item
  const orderItem = {
    itemName : formData.get('itemName'),
    qty : formData.get('qty'),
    unitPrice : formData.get('itemPrice'),
    subTotal: parseFloat(formData.get('qty') * formData.get('itemPrice'))
  }

  // check if item exist
  let itemIdex = 0;
  const foundItem = cart.find(function(item, index){
    itemIdex = index;// captuiring the position of the item in the cart
    return item.itemName === formData.get('itemName')
  });

  // update or add item to cart
  if(foundItem !== undefined){
    cart[itemIdex] = orderItem;
  }else{
    cart.push(orderItem);
  }

  // set session storage
  sessionStorage.setItem('cart', JSON.stringify(cart))
  let cartTotal = cart.length;
  $('#cartTotal').html(cartTotal);
  alert("Your cart was updated successfully!")
});
