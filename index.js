let nextbtn = document.getElementById('next');
let prevbtn = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemsDom = document.querySelector('.carousel .list');
let thumbnailDom = document.querySelector('.carousel .thumbnail')


nextbtn.onclick = function(){
    showSlider('next');
}
prevbtn.onclick = function(){
    showSlider('prev')
}

let timeRunning = 3000;
let timeAutoNext = 5000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
    nextbtn.click();
 }, timeAutoNext)

function showSlider(type){
   let itemSlider =  document.querySelectorAll('.carousel .list .items')
   let itemThumbnail =  document.querySelectorAll('.carousel .thumbnail .item')

   if(type === 'next'){
    listItemsDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0])
    carouselDom.classList.add('next')
   }
   else{
    let positionLastItem = itemSlider.length - 1;
    listItemsDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add(prev);
   }


   clearTimeout(runTimeOut);
   runTimeOut = setTimeout(()  =>{
     carouselDom.classList.remove('next');
     carouselDom.classList.remove('prev');
   }, timeRunning)

   clearTimeout(runAutoRun);
   runAutoRun = setTimeout(() => {
      nextbtn.click();
   }, timeAutoNext)
}



