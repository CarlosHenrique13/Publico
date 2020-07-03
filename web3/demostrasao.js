


function mostra_oculta(){
    
    var div1 = document.getElementById("secao-01");
    var div2 = document.getElementById("secao-02");
    var div3 = document.getElementById("secao-03");
    var div4 = document.getElementById("secao-04");
    var div5 = document.getElementById("secao-05");
    if (div1.style.display === "none") {
        if(div2.style.display === "block"){
            div2.style.display = "none";
            div3.style.display = "block";
        }else{
            if(div3.style.display === "block"){
                div3.style.display = "none"
                div4.style.display = "block";
            }else{
                if(div4.style.display === "block"){
                div4.style.display = "none";
                div5.style.display = "block";
                }else{
                    div5.style.display = "none";
                    div1.style.display = "block";
                }
            }
        }
    } else {
        div1.style.display = "none";
        div2.style.display = "block"        
    }
   
   


}

























































function mostraDiv(id,div2)
{
var divstyle = new String();
divstyle = document.getElementById(id).style.display;

var divAux = new String();
divAux = document.getElementById(div2).style.display;

      if (divAux=="block" || divAux == ""){
       document.getElementById(div2).style.display = "none";
    }   

    document.getElementById(id).style.display = "block";
    return false;
}




