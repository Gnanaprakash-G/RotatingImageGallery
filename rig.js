const imgcontainerEl=document.querySelector(".image-container");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
let x=0;
let timer;
prev.addEventListener("click",()=>
{
  x+=45;
  clearTimeout(timer);
  update(x);
})
next.addEventListener("click",()=>
{
  x-=45;
  clearTimeout(timer);
  update(x);
})

function update()
{
  imgcontainerEl.style.transform=`perspective(1000px) rotateY(${x}deg)`;
  timer=setTimeout(()=>
  {
    x=x-45;
    update();
  },3000)
}
update();