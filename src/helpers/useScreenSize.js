// useScreenWidth.js
import { ref, onMounted, onUnmounted, computed } from 'vue';

export default function useScreenWidth(threshold) {
    const screenWidth = ref(window.innerWidth);

    // Computed property to check if the screen width is <= threshold
    const isBelowThreshold = computed(() => screenWidth.value <= threshold);

    // Function to update the screenWidth ref on window resize
    const updateScreenWidth = () => {
        screenWidth.value = window.innerWidth;
    };

    // Add event listener on component mount
    onMounted(() => {
        window.addEventListener('resize', updateScreenWidth);
    });

    // Cleanup event listener on component unmount
    onUnmounted(() => {
        window.removeEventListener('resize', updateScreenWidth);
    });

    // Return the computed property and the current screen width
    return { isBelowThreshold, screenWidth };
}