let chatbox=document.getElementById("chatbox");

function sendMessage(){

let input=document.getElementById("userInput");
let message=input.value;

chatbox.innerHTML+=`<p><b>You:</b> ${message}</p>`;

let reply=generateReply(message);

setTimeout(()=>{
chatbox.innerHTML+=`<p><b>AI:</b> ${reply}</p>`;
chatbox.scrollTop=chatbox.scrollHeight;
},800);

input.value="";
}

function generateReply(msg){

let name=localStorage.getItem("name");

if(msg.toLowerCase().includes("my name")){
localStorage.setItem("name",msg.split(" ").pop());
return "Nice to meet you "+msg.split(" ").pop()+" 💖";
}

if(name){
return "Hey "+name+" 😊 I enjoy talking with you.";
}

return "I am your AI companion created by Aashrith.";
}

function startVoice(){

let recognition=new webkitSpeechRecognition();

recognition.onresult=function(event){
document.getElementById("userInput").value=
event.results[0][0].transcript;

sendMessage();
}

recognition.start();
}

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

const geometry=new THREE.SphereGeometry(5,32,32);

const material=new THREE.MeshBasicMaterial({
wireframe:true,
color:0x00ffff
});

const planet=new THREE.Mesh(geometry,material);

scene.add(planet);

function animate(){

requestAnimationFrame(animate);

planet.rotation.y+=0.01;

renderer.render(scene,camera);

}

animate();
