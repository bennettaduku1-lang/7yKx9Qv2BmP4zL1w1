const PASSWORD = "143";

function checkCode(){

let code = document.getElementById("passcode").value;

 // Play music
        const music = document.getElementById("bgMusic");
        music.play();

if(code === PASSWORD){

nextPage(2);

}else{

document.getElementById("error").innerHTML =
"Wrong passcode ❤️ Try again.";

}

}

function nextPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});

document.getElementById("page"+page).classList.add("active");

}

const noBtn = document.getElementById("noButton");

noBtn.addEventListener("mouseover",()=>{

const x=Math.random()*250-125;

const y=Math.random()*150-75;

noBtn.style.transform=`translate(${x}px,${y}px)`;

});

noBtn.addEventListener("click",()=>{

alert("Nice try 😂❤️");

});