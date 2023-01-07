import { onMounted, onUnmounted, ref, } from "vue";
export function useWindowspositon(){
    const pageX = ref(0)
    const pageY = ref(0)
    const movepositon = (e) => {
        pageX.value = e.pageX;
        pageY.value = e.pageY;
    }

onMounted(
  () => {
    window.addEventListener('mousemove', movepositon)
  });

onUnmounted(
  () => {
    window.removeEventListener('mousemove', movepositon)
  });
return{
    pageX,
    pageY
}
}