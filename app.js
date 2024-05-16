let on=document.querySelector('.on');
let light=document.querySelector('.light');
let off=document.querySelector('.off');

on.addEventListener("click",function(){
    light.src="./pic_bulbon1.gif";
})
off.addEventListener("click",function(){
    light.src="./pic_bulboff.gif";
})