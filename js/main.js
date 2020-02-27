
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("https://google.com/");
    window.location.href = "http://google.com/";
}

function trocar(elemento){
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
   // alert("trocar texto");
   elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    // document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}
/*



function soma(n1, n2){
    return n1 + n2;
}

/*

function validaIdade(idade){
    if (idade >= 18){

    }
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", " japão", "Brasil"));




/*

// data
var d=new Date();
alert(d);
alert("Digital :" + formacoes)

/*

var count;
for (count=0; count <=5; count++){
    alert(count);
};




/*
//Laço
var count = 0;
while (count <= 5){
    console.log(count);
    count = count + 1;
    alert(count);
    //count++;
};





/*
//comando prompt vai exibir uma pergunta e sera gravado na variavel
var idade = prompt (" Qual sua idade");
// var idade = 18;
if (idade >=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};




var nome = " Rafael Galleani";
// var idade = 29;
// var idade2 = 10;
var n1 = 5;
var n2 = 3;
var frase = " Japão é o melhor time do mundo";
// alert(nome + " tem " + idade + " anos ");
// alert(idade + idade2);
// F12 para acesso ao console
console.log(nome);
// console.log(idade+idade2);
console.log(n1 * n2);
console.log(frase.replace("Japão", " Brasil"));
console.log(frase.toUpperCase("Japão", " Brasil"));
console.log(frase.toLowerCase("Japão", " Brasil"));
// alert(frase.replace("Japão", " Brasil"));


// array
var lista = ["maça", "pêra", "laranja"];
//push para incluir na lista
lista.push("uva");
//pop para retirar
lista.pop("");
console.log(lista);
alert(lista[1]);
// tamanho da lista
console.log(lista.length);
//lista reversa
console.log(lista.reverse());
// levar array para string
console.log(lista.toString());
// separador ( - )
console.log(lista.join(" - "));


// Dicionario

var fruta = {nome:"maça", cor:"vermelho"}
console.log(fruta.nome);
alert(fruta.cor);



//LIsta de dicionarios

var frutas = [{nome:"maça", cor:"vermelho"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);

*/