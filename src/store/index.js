import { defineStore } from 'pinia'
import { ref } from "vue";

export const useViewStore = defineStore('main', () => {
    const isMobile = ref(false)
    const scrollPosition = ref(0)

    function setIsMobile(status) {
        isMobile.value = status
    }

    function setScrollPosition(data) {
        scrollPosition.value = data
    }

    return { isMobile, scrollPosition, setIsMobile, setScrollPosition }
})