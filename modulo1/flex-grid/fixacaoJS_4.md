```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido){
  let ocurrences = 0;
  
  for(i=0; i<arrayDeNumeros.length; i++){
    if (arrayDeNumeros[i] == numeroEscolhido){
      ocurrences++
    }
  }
  
  if (ocurrences == 0){
    return("Número não encontrado")
  }
  
  return (`O número ${numeroEscolhido} aparece ${ocurrences}x`)
}
```