import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiMainClient } from "../api";
import API_ENDPOINTS from "../api/endpoints";
import { BASE_URL_MAIN } from "../api/mainApi";
import { LS_KEY_DOCS } from "../utils/constants/constants";

interface DocStore {
  loading: {
    createDocuments: boolean;
    signDocs: boolean;
    sendSESCode: boolean;
  };
  error: {
    createDocuments: string | null;
    signDocs: string | null;
    sendSESCode: string | null;
  };

  signSuccess: boolean;
  scheduleSubmitSuccess: boolean;
  codeSubmitSuccess: boolean;
  createDocuments: (appId: string) => void;
  signDocs: (appId: string) => void;
  sendSESCode: (appId: string, code: number) => void;
}

export const useDocStore = create(
  persist<DocStore>(
    (set) => ({
      loading: { createDocuments: false, signDocs: false, sendSESCode: false },
      error: { createDocuments: null, signDocs: null, sendSESCode: null },

      signSuccess: false,
      scheduleSubmitSuccess: false,
      codeSubmitSuccess: false,

      createDocuments: async (appId) => {
        set((state) => ({
          loading: { ...state.loading, createDocuments: true },
          error: { ...state.error, createDocuments: null },
        }));

        try {
          await apiMainClient.post(`${BASE_URL_MAIN}${API_ENDPOINTS.DOC.DOC_BY_ID(appId)}`);
          set({ scheduleSubmitSuccess: true });
        } catch (err) {
          set((state) => ({
            error: { ...state.error, createDocuments: "Error submitting form" },
          }));
          console.log(err);
        } finally {
          set((state) => ({
            loading: { ...state.loading, createDocuments: false },
          }));
        }
      },
      signDocs: async (appId) => {
        set((state) => ({
          loading: { ...state.loading, signDocs: true },
          error: { ...state.error, signDocs: null },
        }));

        try {
          await apiMainClient.post(`${BASE_URL_MAIN}${API_ENDPOINTS.DOC.DOC_BY_ID_SIGN(appId)}`);
          set({ signSuccess: true });
        } catch (err) {
          set((state) => ({
            error: { ...state.error, signDocs: "Error submitting form" },
          }));
          console.log(err);
        } finally {
          set((state) => ({
            loading: { ...state.loading, signDocs: false },
          }));
        }
      },
      sendSESCode: async (appId, code) => {
        set((state) => ({
          loading: { ...state.loading, sendSESCode: true },
          error: { ...state.error, sendSESCode: null },
        }));

        try {
          await apiMainClient.post(`${BASE_URL_MAIN}${API_ENDPOINTS.DOC.DOC_BY_ID_SIGN_CODE(appId)}`, code);
          set({ codeSubmitSuccess: true });
        } catch (err) {
          set((state) => ({
            error: { ...state.error, sendSESCode: "Invalid confirmation code" },
          }));
          console.log(err);
        } finally {
          set((state) => ({
            loading: { ...state.loading, sendSESCode: false },
          }));
        }
      },
    }),
    {
      name: LS_KEY_DOCS,
      partialize: (state) =>
        ({
          scheduleSubmitSuccess: state.scheduleSubmitSuccess,
          signSuccess: state.signSuccess,
          codeSubmitSuccess: state.codeSubmitSuccess,
        } as DocStore),
    },
  ),
);
