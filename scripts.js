btn = document.querySelector(".btn");
btn.addEventListener("click", ()=>{
    peso = parseFloat (document.querySelector(".peso").value);
    altura = parseFloat(document.querySelector(".altura"). value);
    resultado = peso / (altura * altura);
    alert(result);
})