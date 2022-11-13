<template>
  <section class="bg-secondary-tint">
    <div class="w-3/4 mx-auto py-52">asdf</div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useViewStore } from "../store";

export default {
  setup() {
    const store = useViewStore();
    const isMobile = computed(() => store.isMobile);

    return {
      isMobile,
    };
  },
};
</script>
