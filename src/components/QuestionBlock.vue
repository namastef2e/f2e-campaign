<script setup>
import { ref } from 'vue'
// defineProps({
//   msg: String
// })

const count = ref(0)

</script>

<template>
  <div class="questionContainer flex justify-center h-screen items-center">
    <div class="block w-3/4"> 
      <div class="title flex justify-center w-full py-8">
        <span>你是否也有以下困擾？</span>
      </div>
      <div class="flex gap-4 w-full p-8 justify-center text-center subTitle"> 
        <div><img src="../assets/image/questionBlock/Q1.svg" class="mb-4"/><span>羨慕別人的酷酷網頁動畫？</span></div>
        <div><img src="../assets/image/questionBlock/Q2.svg" class="mb-4"/><span>滿足不了同事的許願？</span></div>
        <div><img src="../assets/image/questionBlock/Q3.svg" class="mb-4"/><span>動畫技能太雜無從下手？</span></div>
      </div>
    </div>
    
  </div>
</template>

<style scoped>

.questionContainer {
  background: #EEEEEE;
}

.block {
  border: 2px solid transparent;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  background-image: linear-gradient(to right, #EEEEEE, #EEEEEE), linear-gradient(36deg, rgba(120, 255, 214, 1), rgba(0, 121, 145, 1));
  border-top: none;
}

.title {
  background: radial-gradient(204.74% 370% at 51.64% 8.75%, #78FFD6 0%, #007991 100%);
  font-family: 'GenSekiGothic TW';
  font-weight: 700;
  font-size: 35px;
  color: #007991;

}

.subTitle span {
  font-family: 'GenSekiGothic TW';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #007991;
}

</style>
