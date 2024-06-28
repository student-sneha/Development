const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove",(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
   
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
   
    const sizeEl = Math.random()* 100;
    spanEl.style.width = sizeEl +"px";
    spanEl.style.height = sizeEl + "px";
   
    bodyEl.appendChild(spanEl);
   
    setTimeout(()=>{
        spanEl.remove();
    },3000)
});