<template>
  <header
    class="navbar-header header-v2"
    role="navbar"
    aria-label="Site header"
  >
    <nav class="navbar-content navbar-border">
      <img class="w-20" src="../assets/image/banner/bannerTitle.svg" />
      <div>
        <a href="#" class="navbar-link"> 關卡資訊 </a>
        <a href="#" class="navbar-link"> 攻略資源 </a>
        <a href="#" class="navbar-link"> 求職專區 </a>
        <a href="#" class="text-white hover:text-white px-20">選手登入</a>
      </div>
    </nav>
  </header>
</template>


<style lang="postcss" scoped>
.navbar-header {
  @apply bg-transparent sticky top-0 z-20 h-0;
}

.navbar-content {
  @apply h-14 py-3 relative flex flex-wrap items-center justify-between my-0 mx-auto px-4 md:flex-nowrap;
}

.navbar-border {
  /* @apply border-b bg-gradient-to-r from-primary-tint to-primary-dark; */
}

.navbar-link {
  @apply text-primary-dark hover:text-primary-dark px-8;
}
</style>