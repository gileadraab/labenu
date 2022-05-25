```
function calculaPrecoTotal(quantidade) {
  let applePrice = 0;
  if (quantidade >= 12){
    applePrice = 1.00
  } 
  else{
    applePrice = 1.30
  }
  totalPrice = quantidade * applePrice
  return totalPrice
}
```