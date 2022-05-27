```
function calculaNota(ex, p1, p2) {
  let finalGrade = (ex*1 + p1*2 + p2*3)/6;
  if (finalGrade >= 9){
    return "A" 
  } else if (finalGrade < 9 && finalGrade >= 7.5){
    return "B" 
  } else if (finalGrade <= 7.5 && finalGrade >= 6){
    return "C"
  } else {
    return "D"
  }
}
```