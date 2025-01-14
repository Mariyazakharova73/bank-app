import { create } from "zustand";
import { persist } from "zustand/middleware";
import { apiMainClient } from "../api";
import API_ENDPOINTS from "../api/endpoints";
import { BASE_URL_MAIN } from "../api/mainApi";
import { AppStatus, PaymentSchedule, ScoringFormValues } from "../types/types";
import { LS_KEY_SCORING } from "../utils/constants/constants";

interface ScoringStore {
  loading: {
    submitScoring: boolean;
    denyApp: boolean;
  };
  error: {
    submitScoring: string | null;
    denyApp: string | null;
  };

  appId: string | null;
  appStatus: AppStatus | null;
  paymentSchedule: PaymentSchedule[] | null;
  submitSuccess: boolean;
  setAppId: (id: string) => void;
  removeAppId: () => void;

  submitScoring: (formData: ScoringFormValues) => void;
  getAppStatus: (appId: string) => void;
  denyApp: (appId: string) => void;
  denyOffer: () => void;
}

export const useScoringStore = create(
  persist<ScoringStore>(
    (set, get) => ({
      loading: { submitScoring: false, denyApp: false },
      error: { submitScoring: null, denyApp: null },

      appId: null,
      appStatus: null,
      paymentSchedule: null,
      submitSuccess: false,
      setAppId: (id) => set({ appId: id }),
      denyOffer: () => set({ submitSuccess: false }),

      submitScoring: async (formData) => {
        set((state) => ({
          loading: { ...state.loading, submitScoring: true },
          error: { ...state.error, submitScoring: null },
        }));

        const { appId } = get();
        try {
          if (!appId) {
            return;
          }

          const changedFormData = {
            ...formData,
            dependentAmount: Number(formData.dependentAmount),
            employment: {
              employmentStatus: formData.employmentStatus,
              employerINN: formData.employerINN,
              salary: Number(formData.salary),
              position: formData.position,
              workExperienceTotal: Number(formData.workExperienceTotal),
              workExperienceCurrent: Number(formData.workExperienceCurrent),
            },
            account: "11223344556677889900",
          };

          await apiMainClient.put(
            `${BASE_URL_MAIN}${API_ENDPOINTS.APP.REGISTER_BY_ID(appId)}`,
            changedFormData,
          );
          set({ submitSuccess: true });
        } catch (err) {
          set((state) => ({
            error: { ...state.error, submitScoring: "Error submitting form" },
          }));
          throw err;
        } finally {
          set((state) => ({
            loading: { ...state.loading, submitScoring: false },
          }));
        }
      },
      getAppStatus: async (appId) => {
        try {
          const res = await apiMainClient.get<AppStatus>(
            `${BASE_URL_MAIN}${API_ENDPOINTS.ADMIN.APP_BY_ID(appId)}`,
          );
          set({ appStatus: res.data });
          set({ paymentSchedule: res.data?.credit?.paymentSchedule || [] });
        } catch (err) {
          console.log(err);
        }
      },
      denyApp: async (appId) => {
        set((state) => ({
          loading: { ...state.loading, denyApp: true },
          error: { ...state.error, denyApp: null },
        }));

        try {
          await apiMainClient.post<AppStatus>(`${BASE_URL_MAIN}${API_ENDPOINTS.APP.APP_BY_ID_DENY(appId)}`);
        } catch (err) {
          set((state) => ({
            error: { ...state.error, denyApp: "Cancellation error" },
          }));
          console.log(err);
        } finally {
          set((state) => ({
            loading: { ...state.loading, denyApp: false },
          }));
        }
      },
      removeAppId: () => {
        set({ appId: null, appStatus: null, paymentSchedule: null });
        localStorage.removeItem(LS_KEY_SCORING);
      },
    }),

    {
      name: LS_KEY_SCORING,
      partialize: (state) =>
        ({
          appId: state.appId,
          submitSuccess: state.submitSuccess,
          paymentSchedule: state.paymentSchedule,
          appStatus: state.appStatus,
        } as ScoringStore),
    },
  ),
);
