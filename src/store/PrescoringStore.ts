import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiMainClient } from "../api";
import API_ENDPOINTS from "../api/endpoints";
import { BASE_URL_MAIN } from "../api/mainApi";
import { creditOffer, PrescoringFormValues } from "../types/types";

interface PrescoringStore {
  loading: {
    submitPrescoring: boolean;
    applyOffer: boolean;
  };
  error: {
    submitPrescoring: string | null;
    applyOffer: string | null;
  };
  offerSelected: boolean;
  creditOffers: creditOffer[] | null;
  setOffers: (offers: creditOffer[]) => void;
  submitPrescoring: (formData: PrescoringFormValues) => Promise<creditOffer[]>;
  applyOffer: (offer: creditOffer) => void;
}

export const usePrescoringStore = create(
  persist<PrescoringStore>(
    (set) => ({
      loading: { submitPrescoring: false, applyOffer: false },
      error: { submitPrescoring: null, applyOffer: null },

      offerSelected: false,
      creditOffers: null,
      setOffers: (offers) => set({ creditOffers: offers }),
      submitPrescoring: async (formData) => {
        set((state) => ({
          loading: { ...state.loading, submitPrescoring: true },
          error: { ...state.error, submitPrescoring: null },
        }));

        try {
          const res = await apiMainClient.post(`${BASE_URL_MAIN}${API_ENDPOINTS.APP.POST_APP}`, formData);

          const offers = res.data as creditOffer[];
          set({ creditOffers: offers });
          return offers;
        } catch (err) {
          set((state) => ({
            error: { ...state.error, submitPrescoring: "Error submitting form" },
          }));
          throw err;
        } finally {
          set((state) => ({
            loading: { ...state.loading, submitPrescoring: false },
          }));
        }
      },
      applyOffer: async (offer) => {
        set((state) => ({
          loading: { ...state.loading, applyOffer: true },
          error: { ...state.error, applyOffer: null },
        }));

        try {
          await apiMainClient.post(`${BASE_URL_MAIN}${API_ENDPOINTS.APP.APP_APPLY}`, offer);

          set({ offerSelected: true });
        } catch (error) {
          set((state) => ({
            error: { ...state.error, applyOffer: "Error sending offer" },
          }));
          throw error;
        } finally {
          set((state) => ({
            loading: { ...state.loading, applyOffer: false },
          }));
        }
      },
    }),
    {
      name: "prescoring",
      partialize: (state) =>
        ({ creditOffers: state.creditOffers, offerSelected: state.offerSelected } as PrescoringStore),
    },
  ),
);
