// let a=Number(document.queryselector(".age").value)
// let b=Number(document.queryselector(".num").value)
// //   console.log(a)
// //   consol.log(b)
// // document.queryselector(".resultat").value=c
//  let resultat = a + b
//     document.querySelector(".resultat").value=resultat


//  if(resultat>20){
//       document.querySelector(".resultat").style.backgroundColor = "red"
//  }else{
//     document.querySelector(".resultat").style.backgroundColor = "aqua"
//  }

document.querySelector(".btn").addEventListener("click" , ()=>{
    let a = Number(document.querySelector(".nombre1").value);
    let b = Number(document.querySelector(".nombre2").value);
    let resultat = a + b
    document.querySelector(".resultat").value = resultat


    if(resultat >20){
        document.querySelector(".resultat").computedStyleMap.backgroundColor = red

    }else{
        document.querySelector(".resultat").computedStyleMap.backgroundColor = pink
    }
    console.log("okkkkkk")
})
document.querySelector(".button").addEventListener("click" , ()=>{
    let a = Number(document.querySelector(".nombre1").value="");
    let b = Number(document.querySelector(".nombre2").value="");
    let resultat = a + b
    document.querySelector(".resultat").value = resultat

})