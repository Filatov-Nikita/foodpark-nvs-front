import { http } from '@/http';

export default {
  async all() {
    return http.get('promotions').json();
  }
}
