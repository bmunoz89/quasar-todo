import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', {
  state: () => ({
    isSideMenuOpen: true,
  }),
  actions: {
    toggleSideMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen;
    },
  },
});
