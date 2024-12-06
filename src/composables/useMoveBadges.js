import { computed, onMounted, onUnmounted, ref } from 'vue';
import { throttle } from 'throttle-debounce';

export default function(row1Ref, row2Ref, rowsRef) {
  const x1 = ref(0);
  const x2 = ref(0);

  onMounted(() => {
    setTimeout(start, 300);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', tScroll);
  });

  const tScroll = throttle(10, onScroll);

  function start() {
    x1.value = 0;
    x2.value = rowsRef.value.offsetWidth - row2Ref.value.offsetWidth;
    window.addEventListener('scroll', tScroll);
  }

  let prevScrollY = window.scrollY;

  function onScroll(e) {
    if(
      window.scrollY + window.innerHeight < rowsRef.value.offsetTop + rowsRef.value.offsetHeight ||
      window.scrollY > rowsRef.value.offsetTop + rowsRef.value.offsetHeight
    ) return;

    if(x2.value >= row2Ref.value.offsetWidth) return;

    let step = row2Ref.value.offsetWidth / (rowsRef.value.offsetHeight + window.screenY);

    if(window.scrollY > prevScrollY) {
      x1.value -= step;
      x2.value += step;
    } else {
      x1.value += step;
      x2.value -= step;
    }
    prevScrollY = window.scrollY;
  }

  return {
    x1,
    x2,
  }
}
