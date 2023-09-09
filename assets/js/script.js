const button = document.getElementById("Button");
let flagOn = false;
button.addEventListener('click',(e)=>{
    if(!flagOn)
    {
        e.target.previousElementSibling.src = 'assets/img/lamp-on.png';
        e.target.innerText = "Off";
        flagOn = true;
    }
    else{
        e.target.previousElementSibling.src = 'assets/img/lamp-35377.png';
        e.target.innerText = "On";
        flagOn = false;
    }
    
})