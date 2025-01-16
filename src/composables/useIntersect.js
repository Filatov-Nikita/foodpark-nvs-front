import { onMounted } from 'vue';

export default function(
  el,
  onEntry,
  onLeave,
  { threshold = 0, once = false }
) {
    const ob = new IntersectionObserver((payload) => {
      const entry = payload[0];
      if(entry.isIntersecting) {
        onEntry(entry);
        if(once) ob.unobserve(entry.target);
      } else {
        onLeave(entry);
      }
    }, { threshold });

    onMounted(() => {
      if(el.value) {
        ob.observe(el.value);
      }
    });
}
