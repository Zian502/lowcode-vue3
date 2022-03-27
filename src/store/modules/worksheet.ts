import { defineStore } from 'pinia';
import { store } from '/@/store';

export const useWorkSheetStore = defineStore({
  id: 'work-sheet',
  state: ():any =>({

  }),
  getters: {

  },
  actions: {

  }
})

// Need to be used outside the setup
export function useWorkSheetStoreWithOut() {
  return useWorkSheetStore(store);
}