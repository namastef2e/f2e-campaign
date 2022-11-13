
<template>
  <Navbar />
  <Banner />
  <TextMarquee />
  <QuestionBlock />
  <NormalQuestion />
</template>

<script>
import { ref, onBeforeMount, onBeforeUnmount } from "vue";
import { useViewStore } from "./store";

import Navbar from "./components/Navbar.vue";
import Banner from "./components/Banner.vue";
import TextMarquee from "./components/TextMarquee.vue";
import QuestionBlock from "./components/QuestionBlock.vue";
import NormalQuestion from "./components/NormalQuestion.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Banner,
    TextMarquee,
    QuestionBlock,
    NormalQuestion,
  },
  setup() {
    const store = useViewStore();
    const screenWidth = ref(window.innerWidth);

    onBeforeMount(async () => {
      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll);
      handleResize();
    });

    //監控螢幕大小
    const handleResize = () => {
      screenWidth.value = window.innerWidth;
      store.setIsMobile(window.innerWidth > 767 ? false : true);
    };

    //螢幕上下滾動
    const handleScroll = () => {
      store.setScrollPosition(window.scrollY);
    };

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    });
  },
};
</script>
