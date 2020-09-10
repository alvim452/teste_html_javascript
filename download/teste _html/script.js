   
   /*
   //verificar a idade do utilizador
   var data= new Date()
   var ano= data.getFullYear()

   if(idade.length>3){
       window.alert(`A idade introduzida está incorrecta!`)
   }

    
    
    
   //defenir o código postal do utilizador
  var cp1= document.querySelector(`input#txtcp1`).value 
  var cp2= document.querySelector(`input#txtcp2`).value
  var codigo_postal = document.createElement(`codigo_postal`)
  //console.log(cp2-cp2)
  var codigo_postal = (`${cp1}-${cp2}`)
//console.log(codigo_postal)



//Validar o E-mail do utilizador
  function validarEmail(){
      if(!document.forms[0].elements[7].value.includes("@")){
          alert(` O E-MAIL INTRODUZIDO É INVÁLIDO`)
      }

  }

*/

  var utilizador = [
      document.querySelector (`#nome`),     //[0]
      document.querySelector(`#apelido`),  //[1]
      document.querySelector(`#idade`),   //[2]
      document.querySelector(`#sexo`),   //[3]
      document.querySelector(`#localidade`),//[4]
      document.querySelector(`#cidade`),   //[5]
      document.querySelector(`#codigo_postal`),//[6]
      document.querySelector(`#email`),       //[7]
      document.querySelector(`#password`)    //[8]
  ]
  //console.log(utilizador)

  function submeter(){
      var cont=utilizador.length
      console.log(cont)

var res= document.querySelector(`div#res`)
    event.preventDefault()

   /* if(document.forms[0].elements[2].length >= 3){
        window.alert(`A idade introduzida está incorrecta!`)
    }

      for(let pos in utilizador){
     res.innerHtml =  document.write(`A posição ${pos} tem o valor ${utilizador[pos]} <br>`)
      }

      */
      var item=document.createElement(`item`)
      utilizador.forEach(function(campo) {
          var td = document.createElement(`td`)
          td.textContent=campo.value
          tr.appendChild(td)
          
          
      });

    res.appendChild(tr)
  }


  //var tbody=document.querySelector(`tbody`)
  
//Defenir o sexo do utilizador
/*
var valsexo=document.createElement(`valsexo`)

function func(){
    var sexo = document.querySelector(`input#sexo`)
    if(sexo[0].checked){
        var valsexo = sexo[0].value
    }else{
        var valsexo = sexo[1].value
    }
}

 var valsexo = document.forms[0].elements[3].value   //utilizador[3]=valsexo
 var codigo_postal =  document.forms[0].elements[6].value   //utilizador[6]

console.log(utilizador)

function submeter() {

    event.preventDefault()
    var tr= document.createElement(`tr`)
    utilizador.forEach(function(campo) { // campo é o valor de cada item do utilizador 
        for(let utilizador=0; pos<utilizador.length; pos ++){
        console.log(utilizador[pos])
    }
        var td= document.createElement(`td`)// criamos a variavel td
        td.textContent=campo.value // o conteudo de td é o valor de cada campo ou item
        tr.appendChild(td) // tr chama o filho child  que é o td
        //tbody.appendChild(tr)
        campos[0]=``
        campos[1]=``
        campos[2]=``
        campos[3]=``
        campos[4]=``
        campos[5]=``
        campos[6]=``
    })
}
*/



// 2ºPARTE: DATA QUANTIDADE VALOR VOLUME

  var campos = [
      document.querySelector(`#data`),
      document.querySelector(`#quantidade`),
      document.querySelector(`#valor`)
  ]
console.log(campos)

var tbody=document.querySelector(`tbody`)
document.querySelector(`.form`),addEventListener(`submit`,function(event){
    // vou pedir para o querySelector selecionar a classe form naqual eu quero adicionar um evento do tipo submit que vou disparar uma função
    //alert(`oi`)
    event.preventDefault() //estou a dizer ao java script para não submeter o formulario pois se submeter os campos ficam em branco, ao recarregar a pagina eu perco os dados
var tr= document.createElement(`tr`) //criei um tr no documento; tr varrimento que contem todos os items(data, quantidade, valor)

campos.forEach(function(campo){      // campo é o valor de cada item 
    var td= document.createElement(`td`)    // criamos a variavel td
    td.textContent=campo.value//o conteudo de td é o valor de cada campo ou item
    tr.appendChild(td)    // tr chama o filho child  que é o td
})
 var tdVolume=document.createElement(`td`)
 tdVolume.textContent = campos[1].value * campos[2].value
 tr.appendChild(tdVolume)      // criei na tr um filho tdVolume
 tbody.appendChild(tr)
   
campos[0]=``
campos[1]=1
campos[2]=0

})

/* Slider de imagens*/

function preload(){
    imgs = Array(`f1.jpg`,`f2.jpg`,`f3.jpg`,`f4.jpg`,`f5.jpg`,`f6.jpg`)
    imgQtde=imgs.length
    for(i=0; i<imgQtde; i++) {
        var preloadimg = new Image()
        preloadimg.src = imgs[i]
    }

}


function iniciaSlider(){
    preload()
    max="6"
    min="1"
    fi=min
    ts=true
    carregaFoto("f1.jpg")
    document.getElementById("moldura").addEventListener("transitionend",fimTs)
}
function fimTs(){
    ts=true

}

function carregaFoto(foto){
    document.getElementById("moldura").style.backgroundImage="URL("+foto+")"
}

function prox(){
    if(ts){
          ts=false
          fi++
          if(fi>max){
              fi=min
          }
          carregaFoto("f"+fi+".jpg")
    }
}
function ant(){
    if(ts){
        ts=false
        fi--
        if(fi<min){
           fi=max
        }
        carregaFoto("f"+fi+".jpg") 
    }    
}

function adicionar(){
    var li
}


/*FOTO DO MENU*/

function mudaFoto(foto){
    document.getElementById("icone").src = foto
}