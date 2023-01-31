const ans = 'math69'
const input = document.getElementById('search')
document.addEventListener("keydown",(a)=>{
  if(a.key.toLowerCase() === "e"
  && a.ctrlKey
    &&a.shiftKey){
   if(input.value == ans){
     window.location.href='geometry.html'
   }
  }
})

