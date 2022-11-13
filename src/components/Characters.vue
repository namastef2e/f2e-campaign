<template>
  <section class="w-3/4 mx-auto mt-60">
    <div class="text-center">
      <h2 class="character-title">互動式網頁設計</h2>
      <p>以下兩個角色進行攜手合作</p>
    </div>
    <div class="characters-block">
      <div class="ui-character">
        <p>UI 設計師</p>
        <div class="character-dot bg-gradient-radial from-[#9FDCE8] to-[#1B6893]" />
      </div>
      <div class="frontend-character">
        <p>前端工程師</p>
        <div class="character-dot bg-gradient-radial from-[#78FFD6] to-[#149D74]" />
      </div>
    </div>
  </section>
</template>


<style lang="postcss" scoped>
.character-title {
  @apply mb-10;
}
.character-title {
  font-size: 28px;
}

.characters-block {
  @apply flex justify-between text-center mt-20 max-w-2xl mx-auto text-2xl;
}

.character-dot {
  @apply w-48 h-48 mt-16 blur-xl rounded-full
}
</style>