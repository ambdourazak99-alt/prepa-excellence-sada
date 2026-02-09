const quiz = [
{
q:"Quel est le rôle principal de la BCE ?",
o:["Contrôler l'inflation","Gérer les écoles","Fixer les impôts"],
a:0
},
{
q:"Une suite géométrique est définie par ?",
o:["Une somme constante","Un produit constant","Une différence constante"],
a:1
}
];

let current=0;

function load(){
document.getElementById("question").innerText=quiz[current].q;
const opt=document.getElementById("options");
opt.innerHTML="";
quiz[current].o.forEach((text,i)=>{
let div=document.createElement("div");
div.className="option";
div.innerText=text;
div.onclick=()=>check(i);
opt.appendChild(div);
});
}

function check(i){
if(i===quiz[current].a){
alert("Bonne réponse");
}else{
alert("Incorrect");
}
current++;
if(current<quiz.length){
load();
}else{
alert("Quiz terminé");
location.href="index.html";
}
}

load();