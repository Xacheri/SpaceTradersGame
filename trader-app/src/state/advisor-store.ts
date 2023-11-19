// advisor store
// ============
// This store is used to store information on the "advisor" user.
// The advisor user is used behind the scenes to get information
// from the SpaceTrader API where a token is required.

import { defineStore } from "pinia";

export const useAdvisorStore = defineStore({
  id: "advisor",
  state: () => ({
    pinia_advisor_token:
      "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiRjRDVF80RFYxNTBSIiwidmVyc2lvbiI6InYyLjEuMiIsInJlc2V0X2RhdGUiOiIyMDIzLTExLTE4IiwiaWF0IjoxNzAwMzMxMDM1LCJzdWIiOiJhZ2VudC10b2tlbiJ9.E6aFq_ACFr8WSGR5I5tD8_EEqcwif479dtHMcIt-R76IHQNbqWJmkTYniZytuwqO_fpHOcLea-iEKnIYa9L0gUM3FMB7iUnZ6t_EAS2NhWR0cxReSn7X07i68eLm6xB_vZjkwYsr-BcjbbnVwDYBslquN_DmKO7o3HspLFH_PoLP6RHAodU0CbL4p0NltnYpGOHlKfi1bNmnwu7fv-boawyrcrTNVSINBDkyEdYnViZzsLp5XKz4SXnsoHAUyClciec-_8uZsRpxXyvbJ00inKvhHqYDGv3UR1kdny_pTiNihzlGq6XGe3Vom223BQha8ymy3JrR0UbOD4SyUkvSYg",
  }),
  getters: {
    getAdvisorToken: (state) => state.pinia_advisor_token,
  },
});
