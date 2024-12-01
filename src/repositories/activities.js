import { http } from '@/http';

export default {
  async types() {
    return http.get('activities-types').json();
  },
  async elements(typeId) {
    return http.get('activities', {
      searchParams: {
        type: typeId
      }
    }).json();
  },
}
