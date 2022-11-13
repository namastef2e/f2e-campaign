<script setup>
import { ref } from 'vue'

const count = ref(0)
var running = false;
window.addEventListener("scroll", windowScroll);
var beforeScrollTop = window.scrollY;
function windowScroll(e) {
  var afterScrollTop = window.scrollY;
  var scrollDirection = (afterScrollTop - beforeScrollTop > 0) ? "down" : "up";
  beforeScrollTop = afterScrollTop;
  if (running == false) {
    run(scrollDirection);
  }
  
}

function run(scrollDirection) {
  var el = document.querySelectorAll('.text');
  for(var i = 0; i < el.length; i++){
    el[i].classList.remove("right");
    el[i].classList.remove("left");
    if (i < 2) {
      if (scrollDirection == "down") {
        el[i].classList.add("right");
      }
      else {
        el[i].classList.add("left");
      }
    }
    else {
      if (scrollDirection == "down") {
        el[i].classList.add("left");
      }
      else {
        el[i].classList.add("right");
      }
    }
    el[i].classList.add("running");
  } 
  running = true;
  setTimeout(stop, 500)
}

function stop() {
  var el = document.querySelectorAll('.text');
  for(var i = 0; i < el.length; i++){
    el[i].classList.remove("running");
  } 
  running = false;
}

</script>

<template>
  <div class="textContainer w-full">
    <h1 class="text right">UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted</h1>
    <h1 class="text right">UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted</h1>
    <h1 class="text left">UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted</h1>
    <h1 class="text left">UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted • UIUX Fronted</h1>

  </div>
</template>

<style scoped>

.textContainer {
  overflow: hidden;
  white-space: nowrap;
}



.textContainer {
  background: radial-gradient(204.74% 370% at 51.64% 8.75%, #78FFD6 0%, #007991 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 12px;
  height: 228px;
}

h1 {
  font-family: 'Bluu Next';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #EEEEEE;
}

.right {
  animation: 10s moveRight linear infinite normal;
  animation-play-state: paused;
}

.left {
  animation: 10s moveLeft linear infinite normal;
  animation-play-state: paused;
}

.running {
  animation-play-state: running;
}

@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-70%);
  }
}

@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(70%);
  }
}

</style>
