import { ref, watch } from 'vue';

export default async function(fetchFn, opts) {
  const defaultOptions = {
    immediate: true,
    watch: [],
  };

  const options = Object.assign({}, defaultOptions, opts);

  const data = ref(null);
  const error = ref(null);
  const pending = ref(false);

  async function send() {
    try {
      pending.value = true;
      const res = await fetchFn();
      data.value = res;
      return res;
    } catch(e) {
      data.value = null;
      error.value = e;
    } finally {
      pending.value = false;
    }
  }

  if(options.immediate) {
    await send();
  }

  if(options.watch.length > 0) {
    options.watch.forEach((w) => {
      watch(w, send);
    });
  }

  return {
    data,
    error,
    pending,
    send,
  }
}
