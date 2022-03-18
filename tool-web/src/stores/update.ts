import type { UpdateInfo } from "@/entity/UpdateInfo";

export const useUpdateStore = defineStore("update", {
  state: () => ({
    showDialog: false,
    loading: false,
    updateInfo: <UpdateInfo>{},
    skipSha512: undefined,
  }),
  getters: {
    isLoading: (state) => state.loading,
  },
  actions: {
    resetUpdateInfo() {
      this.updateInfo = <UpdateInfo>{};
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUpdateStore, import.meta.hot));
}
