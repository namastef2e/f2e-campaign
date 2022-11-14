<script setup>
import { ref } from 'vue'
import $ from 'jquery'
// import func from '../../vue-temp/vue-editor-bridge';
// defineProps({
//   msg: String
// })

const count = ref(0)

var data = { 
  "Common": [
    {"question": "如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？", "answer": "可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。"},
    {"question": "大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品", "answer": "這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。"},
    {"question": "我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？", "answer": "主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。"},
    {"question": "我已經寫到一半了，但時間快來不及，可以先投稿嗎？", "answer": "可以，有投稿表示你還會持續努力在這次活動上。"}
  ], 
  "UI": [
    {"question": "到時投稿到平台是提供什麼呢？我也不像是工程師可以有 CODEPEN 上傳。", "answer": "其中投稿的欄位裡面會有一個「線上標示文件」，像是 Adobe XD 便有提供該服務(範例連結)，屆時提供標示文件後，便可讓其他前端工程師採用你的設計稿來開發。"},
    {"question": "投稿上去的 UI 作品，我知道需要授權讓前端工程師組做成 Web 介面，那授權部分可以設定嗎？", "answer": "會有的，屆時平台投稿流程上，會讓您的作品可以選擇 CC0、CC BY 等授權，以保障您的 UI 作品權益。"},
    {"question": "一定要上傳「線上標示文件」嗎？", "answer": "是的，因為這樣才有辦法讓其他前端工程師，能採用您的設計稿，將您的設計稿實作出網頁格式。如果您是使用 Sketch，也可使用 Sketch Measure 編譯出來後，壓縮 ZIP 到雲端空間 (Dropbox、Google Drive)。"},
    {"question": "不能使用 PS、Illustrator 設計嗎？", "answer": "只要您能找到 PS 或 Illustrator 產出線上標示文件的方式就可以，因為前端工程師大部分皆比較少具有繪圖軟體，所以用線上標示文件將會減少許工程師協作上的溝通時間。"},
    {"question": "當每週一題目出來後，我有一些設計進度也可以先投稿嗎？", "answer": "可以，團隊在協作過程中，一定也會先出些進度提供前端切版，有進度時您也可以先投稿，讓前端工程師可以先接手，之後再透過 FB 社團來溝通進度即可。"},
  ], 
  "Frontend":[], 
  "Group":[] 
};


var currentTab = "Common";
// var currentTab = "UI";

function click(el) {
  $(el.currentTarget).next('h5').slideToggle(200);
}

function chageTab(type) {
  console.log(type);
  currentTab = type;
  console.log(currentTab);
}

</script>


<template>
  <div class="questionContainer h-screen flex items-center justify-center">
    <div class="w-3/4">
      <div class="flex justify-center gap-x-10 py-12">
        <div class="absolute title">常見問題</div>
        <div class="cursor-pointer active" @click="chageTab('Common')">All</div>
        <div class="cursor-pointer" @click="chageTab('UI')">UI</div>
        <div class="cursor-pointer" @click="chageTab('Frontend')">Frontend</div>
        <div class="cursor-pointer" @click="chageTab('Group')">Group</div>
      </div>
      <div class="flex justify-center"> 
        <div class="list w-full text-right">
          <template v-for="(item, index) in data[currentTab]">  
            <h3 @click="click($event)" class="py-8 border-b-2 border-slate-300 cursor-pointer flex"><a> 0{{ index+1 }} </a>{{ item.question }}</h3>
            <h5 class="py-4 text-stone-500">{{ item.answer }}</h5>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.questionContainer {
  background: #EEEEEE;
}

.title {
  left: 12vw;
  font-family: 'GenSekiGothic TW';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  color: #007991;
}

h3{
  font-family: 'GenSekiGothic TW';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  justify-content: space-between;
}

h3 a {
  color: #787878;
  font-family: 'Bluu Next';
  font-style: normal;
}

h5{
	display: none;
}

.active {
  color: #007991;
}


</style>
