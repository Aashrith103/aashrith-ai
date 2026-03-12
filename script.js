let chatbox=document.getElementById("chatbox");

function sendMessage(){

let input=document.getElementById("userInput");

let msg=input.value;

chatbox.innerHTML+=`<p>🧑 ${msg}</p>`;

let reply=aiReply(msg);

setTimeout(()=>{

chatbox.innerHTML+=`<p>🤖 ${reply}</p>`;

speak(reply);

chatbox.scrollTop=chatbox.scrollHeight;

},700);

input.value="";
}

function aiReply(msg){

let name=localStorage.getItem("name");

if(msg.toLowerCase().includes("my name")){

let n=msg.split(" ").pop();

localStorage.setItem("name",n);

return "Nice to meet you "+n+" 💖";

}

if(name){

return "Hello "+name+" ✨ I enjoy talking with you.";

}

return "I am your AI companion created by Aashrith.";
}

function speak(text){

let speech=new SpeechSynthesisUtterance(text);

speechSynthesis.speak(speech);

}

function startVoice(){

let rec=new webkitSpeechRecognition();

rec.onresult=function(e){

document.getElementById("userInput").value=e.results[0][0].transcript;

sendMessage();

}

rec.start();

}

function updateClock(){

let d=new Date();

document.getElementById("clock").innerText=d.toLocaleTimeString();

}

setInterval(updateClock,1000);



const scene=new THREE.Scene();

const camera=new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer=new THREE.WebGLRenderer({
canvas:document.querySelector("#bg")
});

renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.z=30;

const geo=new THREE.SphereGeometry(5,32,32);

const mat=new THREE.MeshBasicMaterial({
wireframe:true,
color:0x00ffff
});

const planet=new THREE.Mesh(geo,mat);

scene.add(planet);

function animate(){

requestAnimationFrame(animate);

planet.rotation.y+=0.01;

renderer.render(scene,camera);

}

animate();
