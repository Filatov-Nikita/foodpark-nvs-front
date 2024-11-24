import { http } from '@/http';

export default {
  async show() {
    return http.get('home').json();
  }
}
