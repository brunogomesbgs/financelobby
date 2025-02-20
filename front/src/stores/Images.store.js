import { defineStore } from 'pinia';

const baseUrl = `https://unsplash.com/documentation#search-photos`;

export const useImagesStore = defineStore({
  id: 'images',
  state: () => ({
    images: {},
    image: {},
  }),
  actions: {
    async loadImages() {
      this.images = { loading: true };
      try {
        const response = await fetch(
          `${baseUrl}`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`
            }
          });
        this.images = await response.json();
      } catch (error) {
        this.images = { error };
      }
    }
  }
})