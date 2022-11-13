<script setup>
import { ref } from 'vue'
// defineProps({
//   msg: String
// })

const count = ref(0)

window.addEventListener("scroll", windowScroll);
var beforeScrollTop = window.scrollY;
function windowScroll(e) {
  var afterScrollTop = window.scrollY;
  var scrollDirection = (afterScrollTop - beforeScrollTop > 0) ? "down" : "up";
  beforeScrollTop = afterScrollTop;
  const textCircle = document.querySelector(".leftMoveText");
  console.log(window.scrollY);
  if (0 <= window.scrollY && window.scrollY < 100) {
  // console.log(scrollDirection);
  // console.log(textCircle.getBoundingClientRect().left);
    if (textCircle.getBoundingClientRect().left > 0 &&　scrollDirection == "up") {  // 已經往下滾動到一半
    // if (scrollDirection == "up") {  // 已經往下滾動到一半
      textCircle.classList.remove('leftLineDown1');
      // textCircle.classList.remove('leftLineUp2');
      textCircle.classList.add('leftLineUp1');
    }
    else {
      textCircle.classList.remove('leftLineUp1');
      textCircle.classList.add('leftLineDown1');
    }
    
  } 
  else if(window.scrollY > 100) {
    if (textCircle.getBoundingClientRect().top > 100 && scrollDirection == "up") { // 已經往下滾動過
      // if (scrollDirection == "up") {
      textCircle.classList.remove('leftLineDown2');
      textCircle.classList.add('leftLineUp2');
    }
    else {
      textCircle.classList.remove('leftLineUp2');
      textCircle.classList.add('leftLineDown2');
    }
    
  }
}


</script>

<template>
  <div class="banner bg-secondary-tint">
    <img src="../assets/image/banner/bannerLeftCircle.svg" class="absolute bannerLeftCircle"/>
    <img src="../assets/image/banner/bannerBG.svg" class="absolute banerBG"/>
    <img src="../assets/image/banner/bannerLine.svg" class="absolute line" id="moveLine"/>
    <img src="../assets/image/banner/leftMoveText.svg" class="absolute leftMoveText"/>

    <img src="../assets/image/banner/bannerRightCircle.svg" class="absolute bannerRightCircle"/>
    <img src="../assets/image/banner/bannerRightCircle2.svg" class="absolute bannerRightCircle2"/>
    <img src="../assets/image/banner/circleText.svg" class="absolute circleText"/>
    <div class="flex h-screen justify-center items-center">
      <div class="flex items-start">
        <div>
          <img src="../assets/image/banner/bannerTitle.svg"/>
          <img src="../assets/image/banner/bannerSubTitle.svg"/>
        </div>
        <img src="../assets/image/banner/banner4th.svg"/>
      </div>
    </div>

  </div>
</template>

<style scoped>
.banerBG {
  top: -150px;
  right: -180px;
  max-width: 150vw;
  width: 2500px;
}

.line {
  width: 40vw;
  z-index: 2;
  top: 130px;
}

.banner {
  height: 800px;
  position: relative;
  overflow: hidden;
}
.bannerLeftCircle {
  top: 400px;
  left: -150px;
}

.bannerRightCircle {
  width: 35vw;
  right: -100px;
  top: 50px;
}

.bannerRightCircle2 {
  width: 32vw;
  right: -70px;
  bottom: 200px;
}

.leftMoveText {
  width: 15vw;
  offset-path: path('M-148 51.7223C40.4689 13.4461 430.716 -40.1407 483.955 51.7223C550.502 166.551 115.189 327.496 153.717 406.815C184.539 470.271 428.748 448.319 547 429.412');
  position: absolute;
  transform: translate(0, 0);
  /* top: 15%;
  left: 20%; */
  animation-fill-mode: both;
  top: 130px;
}

.leftLineDown1 {
  -webkit-animation: moveDown1 1500ms alternate ease-in-out;
  animation: moveDown1 1500ms alternate ease-in-out;
  animation-fill-mode: both;
}

.leftLineDown2 {
  -webkit-animation: moveDown2 1500ms alternate ease-in-out;
  animation: moveDown2 1500ms alternate ease-in-out;
  animation-fill-mode: both;
}

.leftLineUp2 {
  -webkit-animation: moveUp2 1500ms alternate ease-in-out;
  animation: moveUp2 1500ms alternate ease-in-out;
  animation-fill-mode: both;
}
.leftLineUp1 {
  -webkit-animation: moveUp1 1500ms alternate ease-in-out;
  animation: moveUp1 1500ms alternate ease-in-out;
  animation-fill-mode: both;
}

.circleText {
  /* bottom: 70px;
  right: -40px;
  width: 32vw; */
  
  /* 整個svg 旋轉 */
  width: 32vw;
  bottom: 120px;
  right: -50px;
  animation: spin-3587acbb 50s linear infinite;
  width: 32vw;
}

@keyframes spin {
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
}

/* left text-circle move with the line */
@keyframes moveDown1 {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 50%;
  }
}

@keyframes moveDown2 {
  0% {
    offset-distance: 50%;
  }
  100% {
    offset-distance: 100%;
  }
}

@keyframes moveUp1 {
  0% {
    offset-distance: 50%;
  }
  100% {
    offset-distance: 0%;
  }
}

@keyframes moveUp2 {
  0% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 50%;
  }
}

</style>
