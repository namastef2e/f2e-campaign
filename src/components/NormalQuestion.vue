<script setup>
import { ref } from 'vue'
// defineProps({
//   msg: String
// })

const count = ref(0)

const data = { 
  "Common": [
    {"question": "Q：如果某一週不小心挑戰失敗，是否能再繼續挑戰後面關卡？", "answer": "可以，儘管那週挑戰失敗，之後您仍可以挑選喜歡的關卡進行挑戰，並在該關卡期限內繳交作品。"},
    {"question": "Q：大家都好強，我怕我做的東西沒有達到過關門檻，不敢登錄作品", "answer": "這個活動並非競爭性質，每個參賽者都是你的隊友，最大的敵人是你自己，因為你必須定期練功前端開發，讓自己能夠順利完賽。"},
    {"question": "Q：我不確定自己做的版型有沒有符合過關門檻，要寫到什麼程度才有到過關門檻？", "answer": "主辦單位其實不會去審核大家的程式碼，只要你認為當週你有針對主題有做到一定程度，就算是半完成品也請大方投稿，不用擔心。"},
    {"question": "Q：我已經寫到一半了，但時間快來不及，可以先投稿嗎？", "answer": "可以，有投稿表示你還會持續努力在這次活動上。"}
  ], 
  "UI": [], 
  "Frontend":[], 
  "Group":[] 
};
// $('.list h3').click(function(event) {
// 		$(this).toggleClass('active');
// 		$(this).siblings('h5').slideToggle(200);
// 	});
function click(el) {
  console.log("click");
  console.log(el);
  // $(this).toggleClass('active');
	// 	$(this).siblings('h5').slideToggle(200);
}
</script>


<template>
  <div class="questionContainer flex justify-center h-screen items-center">
    <div class="flex justify-center w-3/4 gap-6">
      <div>All</div>
      <div>UI</div>
      <div>Frontend</div>
      <div>Group</div>
    </div>
    <div> 
      <div class="list">
        <h3 @click="click(this)">選單1</h3>
        <h5>選單1-1</h5>
        <h5>選單1-2</h5>
        <h5>選單1-3</h5>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3{
	border:1px solid gray;	
	color:gray;
	font-weight:600;
	font-size: 16px;
	padding: 10px;
}
h3:hover, h3.active{
	background: gray;
	color:#fff;
}
h5{
	margin:10px;
	display: none;
}


</style>
