var count = 0;

function carrusel() {
    document.getElementById("imgbaner").style.opacity = "0";
    document.getElementById("imgbaner").style.transition = "all 1s";

    setTimeout("cambio()", 1000);
}

function cambio() {
    let img = ['banner1','banner2','banner3']
    count++;
    if (count >= img.length) { 
        count = 0;
     }

    document.querySelector("#imgbaner").setAttribute("src", "../images/" + img[count] + ".jpg");
    document.querySelector("#imgbaner").style.opacity = "1";
    document.querySelector("#imgbaner").style.transition = "all 1s";

    setTimeout("carrusel()", 2000);

}


function calculadoraImc(){
    let estatura= document.getElementById("estatura").value;
    let peso = document.getElementById("peso").value
    let edad = document.getElementById("edad").value

    let imc = (peso)/((estatura*estatura)/10000);

    document.getElementById("resultado").value = imc
    console.log(imc);


}




document.body.setAttribute("onload","carrusel()");