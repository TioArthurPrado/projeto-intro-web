const objeto1 = {
    nome: `golden state warriors`,
    idade: 76,
    tituloLiga: true,
    imagem: "./imagens/gsw.png",
    timePrincipal: [`Stephen Curry`,` Klay Thompson`, ` Jordan Poole`, ` Draymond Green`, ` Andrew Wiggins`],
    link: "https://www.nba.com/warriors",
}
const objeto2 = {
    nome: `boston celtics`,
    idade: 76,
    tituloLiga: true,
    imagem: "./imagens/celtics.png",
    timePrincipal: [`Jayson Tatum`, ` Rober Williams`, ` Jaylen Brown`, ` Marcus Smart`, ` Al Horford`],
    link: "https://www.nba.com/celtics",
}
const objeto3 = {
    nome: `los angeles lakers`,
    idade: 75,
    tituloLiga: true,
    imagem: "./imagens/lakers.png",
    timePrincipal: [`Lebron James`, ` Russell Westbrook`, ` Anthony Davis`, ` Lonnie Walker`, ` Thomas Bryant`],
    link: "https://www.nba.com/lakers",
}
const objeto4 = {
    nome: `cleveland cavaliers`,
    idade: 52,
    tituloLiga: true,
    imagem: "./imagens/cavaliers.png",
    timePrincipal: [`Jarrett Allen`, ` Darius Garland`, ` Caris LeVert`, ` Kevin Love`, ` Donovan Mitchell`],
    link: "https://www.nba.com/cavaliers",
}

// //SEMANA 1.3
const idadeTimes = (objeto1.idade + objeto2.idade + objeto3.idade + objeto4.idade) / 4 
console.log("A media da população por estados é de ", idadeTimes);

// //SEMANA 1.4
const titulosLiga = objeto1.tituloLiga && objeto2.tituloLiga && objeto3.tituloLiga && objeto4.tituloLiga 
console.log("A condição Booleana é" ,titulosLiga, " quando comparada utilizando a tabela VERDADE. Porque todos os estados são litoraneos")

// //SEMANA 3.1
// // ALTERAÇÃO DAS letVARIÁVEIS PARA OBJETOS, LINHA 1 À 32

//SEMANA 3.2
let arrayObjetos = []

//SEMANA 3.3  e 4.1 Alteração para verificação booleana
//SEMANA 4.2 Adicionando verificação IF/ESLSE PARA BOOLEANO

function pushArray(objeto){
    if(objeto.tituloLiga === true){
        arrayObjetos.push(objeto)
    }else{
        alert(` O objeto não foi adicionado ao array`)
    }
}

pushArray(objeto1)
pushArray(objeto2)
pushArray(objeto3)
pushArray(objeto4)

// // console.log(arrayObjetos)

// //SEMANA 5.1

function converteArray (obj){
    let toString = ``;
    return toString += obj.timePrincipal
}

// console.log(stringCidades3)

//SEMANA 2.2 / 5.1 REESCREVENDO RELATÓRIO
console.log(`${objeto1.nome.toUpperCase()} \n ${objeto1.idade} \n ${objeto1.tituloLiga} \n ${converteArray(objeto1)}`)
console.log(`${objeto2.nome.toUpperCase()} \n ${objeto2.idade} \n ${objeto2.tituloLiga} \n ${converteArray(objeto2)}`)
console.log(`${objeto3.nome.toUpperCase()} \n ${objeto3.idade} \n ${objeto3.tituloLiga} \n ${converteArray(objeto3)}`)
console.log(`${objeto4.nome.toUpperCase()} \n ${objeto4.idade} \n ${objeto4.tituloLiga} \n ${converteArray(objeto4)}`)

// //SEMANA 5.2
// for (let i in arrayObjetos) {
//     for (j in arrayObjetos[i]) {
//         console.log(arrayObjetos[i][j])
//     }
// }

//SEMANA 6.1

function imprimeObjeto(referencia) {
    let stringObjeto = ``
    stringObjeto = referencia
    // console.log(stringObjeto)
}

imprimeObjeto(objeto1)

//SEMANA 6.2
const funcaoBusca = (array, input) => {
for (let i = 0; i < array.length; i++) {
      for (j in array[i]) {
        if (array[i][j] === input) {
            let main = document.getElementById("main");
            let div = document.createElement("div");
            let section = document.createElement("section");
            let img = document.createElement("img");
            let link = document.createElement("a")
            let ul = document.createElement("ul");
            let li1 = document.createElement("li");
            let li2 = document.createElement("li");
            let li3 = document.createElement("li");
            div.setAttribute("id" , "div-sections")
            img.src += arrayObjetos[i].imagem; 
            img.setAttribute("id", "img-section")
            link.setAttribute("class" , "a-footer");
            link.setAttribute("href",arrayObjetos[i].link);
            link.setAttribute("target","_blank");
            link.innerHTML += arrayObjetos[i].nome.toUpperCase();
            li1.innerHTML += "Nome: ";
            li2.innerHTML += `População: ${arrayObjetos[i].idade}`;
            li3.innerHTML += `Principais Cidades: ${arrayObjetos[i].timePrincipal}`;
            section.setAttribute("id", `section`);
            li1.appendChild(link);
            main.appendChild(div);
            div.appendChild(section);
            section.append(img);
            section.appendChild(ul);
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            main.insertAdjacentElement("beforeend", div)
        }
      }
    }
  };



// FUNÇÃO QUE É ATIVADA PELO CLICK NO BUTTON E CHAMA A FUNÇÃO DE BUSCA
  function busca(event){
    event.preventDefault()
    let input = document.getElementById("input").value.toLowerCase()
    if (input === "") {
        alert("Nenhum item foi encontrado!");
    }else{
        document.getElementById("div-sections").remove()
        funcaoBusca(arrayObjetos, input)
    }
  }

//SEMANA 11.1 CRIANDO ELEMENTOS ATRAVÉS DE DOM
// let header = document.getElementById("header")
// let h1 = document.createElement("h1").innerHTML = "Lista de Estados"
// header.classList.add("header")
// header.append(h1)

function criaObj (arrayObj){
for (let i = 0 ; i<arrayObj.length ; i++) {
        let div = document.getElementById("div-sections");
        let section = document.createElement("section");
        let img = document.createElement("img");
        let link = document.createElement("a");
        let ul = document.createElement("ul");
        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        link.setAttribute("class" , "a-footer");
        img.src = arrayObj[i].imagem;
        link.setAttribute("href",arrayObj[i].link);
        img.setAttribute("id", "img-section");
            link.setAttribute("target","_blank");
            link.innerHTML += `<b>${arrayObj[i].nome.toUpperCase()}</b>`;
            li2.innerHTML += `${arrayObj[i].idade} anos`;
            li3.innerHTML += `<b>Elenco:</b> ${arrayObj[i].timePrincipal}`;
        section.setAttribute("id", `section`)
        div.appendChild(section);
        li1.appendChild(link);
        section.append(img);
        section.appendChild(ul);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
    }
}
    
criaObj(arrayObjetos)
