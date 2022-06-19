const pano = document.getElementById("pano");
const putin = document.getElementById("putin");
document.addEventListener("keydown", function(event){
    jump();
})

function jump(){
    if (pano.classList != "jump"){
        pano.classList.add("jump")
    }
    setTimeout(function(){pano.classList.remove("jump")},300)
}