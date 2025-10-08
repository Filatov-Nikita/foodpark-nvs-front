import { http } from '@/http';

export default {
  async all(categoryId) {
    return http.get('restaurants', {
      searchParams: categoryId ? { category_id: categoryId } : {},
    }).json();
  },
  async show(restaurantId) {
    return http.get(`restaurants/${restaurantId}`).json();
  },
  async categories() {
    return http.get('kitchens').json();
  },
}
