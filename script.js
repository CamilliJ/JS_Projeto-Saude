window.addEventListener('load' , comecar);

var comida = null;
var globalComida = []
var id= 1;
var inp = document.querySelector("#comida").id

function comecar(){
    comida = document.querySelector("#comida");
    submit();
    input();
}

function submit(){
    var form = document.querySelector("form");
    form.addEventListener("submit", cadastro);

    function cadastro(evento){
        evento.preventDefault();
    }
}

function input(){
    comida.focus();
    comida.addEventListener("keyup", escreveu);

    function escreveu(evento){
        if(evento.key == "Enter" && comida.value!=' '){
            insertName(event.target.value);
        }
    }

    function insertName(newName) {
        globalComida.push(newName);
        //alert(globalComida)
        adicionar(newName);
    }

    function adicionar(novo){

        var dia = document.querySelector("#Dia").value
        var tabela =  null
        var linha = "<li id='id"+id+"'> <img src='exc.png' onclick='apagar("+id+")' class='apagar'> "+novo+"<img src='botao-editar.png' onclick='editar("+id+")' class='editar'></li>"
        id++;
            //alert(dia)
        switch (dia){
            case "segunda":
                tabela = document.getElementById("segunda")
                tabela.innerHTML += linha
            break;
            case "terca":
                tabela = document.getElementById("terca")
                tabela.innerHTML += linha
            break;
            case "quarta":
                tabela = document.getElementById("quarta")
                tabela.innerHTML += linha
            break;
            case "quinta":
                tabela = document.getElementById("quinta")
                tabela.innerHTML += linha
            break;
            case "sexta":
                tabela = document.getElementById("sexta")
                tabela.innerHTML += linha
            break;
            case "sabado":
                tabela = document.getElementById("sabado")
                tabela.innerHTML += linha
            break;
            case "domingo":
                tabela = document.getElementById("domingo")
                tabela.innerHTML += linha
            break;
            
        }

        

    }

    

}
function apagar(index){
    var dia = document.querySelector("#Dia").value
    switch (dia){
        case "segunda":
            id = "id" + index
            document.getElementById(id).style.display = "none"
            var indice = index - 1;
            globalComida.splice(indice, 1)   
        break;
        case "terca":
            id = "id" + index
            document.getElementById(id).style.display = "none"
            var indice = index - 1;
            globalComida.splice(indice, 1)
         break;
        case "quarta":
            id = "id" + index
            document.getElementById(id).style.display = "none"
            var indice = index - 1;
            globalComida.splice(indice, 1)
        break;
        case "quinta":
            id = "id" + index
            document.getElementById(id).style.display = "none"
            var indice = index - 1;
            globalComida.splice(indice, 1)
        break;
        case "sexta":
            id = "id" + index
            document.getElementById(id).style.display = "none"
            var indice = index - 1;
            globalComida.splice(indice, 1)   
        break;
        case "sabado":
            id = "id" + index
            document.getElementById(id).style.display = "none"
            var indice = index - 1;
            globalComida.splice(indice, 1)   
        break;
        case "domingo":
            id = "id" + index
            document.getElementById(id).style.display = "none"
            var indice = index - 1;
            globalComida.splice(indice, 1)
        break;
        
    }
    
   
}

function editar(index){
    var divEditar = document.querySelector("#editarDiv").style.display ="block"
    editado = document.querySelector("#editado");

    editado.addEventListener("keyup", editou);

    function editou(evento){
        if(evento.key == "Enter" && editado.value!=' '){
            updateName(event.target.value, index);
        }
    }

    function updateName(atualizar, index){
        indexFinal = "#id" + index
        divEditar = document.querySelector("#editarDiv").style.display ="none"

        var linhaAlterar = document.querySelectorAll(indexFinal)[0]
        var linha2 = "<li id='id"+index+"'> <img src='exc.png' onclick='apagar("+index+")' class='apagar'> " + atualizar + " <img src='botao-editar.png' onclick='editar("+index+")' class='editar'></li>"
        console.log(atualizar)
        linhaAlterar.innerHTML = linha2

    }
}

//IMC

function teste(){
    
}


function calcular(){
    var peso =  parseFloat(document.getElementById("peso").value)
    var altura =  parseFloat(document.getElementById("altura").value)

    var imc = peso /(altura * altura);

    document.getElementById("resposta").innerHTML = "O seu IMC é: " + imc.toFixed(2)
    document.getElementById("resposta").style.textAlign = 'center'
    document.getElementById("resposta").style.marginTop = '20px'
    document.getElementById("resposta").style.fontFamily = 'Montserrat, sans-serif;'
    document.getElementById("resposta").style.fontSize = '20px'
}
