import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  userData: any;
  accessToken: string | null;

  setUser: (user: any) => void;
  setAccessToken: (token: string) => void;
  clearUser: () => void;
}

const AuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userData: null,
      accessToken: null,

      setUser: (user) => set({ userData: user }),

      setAccessToken: (token) => set({ accessToken: token }),

      clearUser: () => set({ userData: null, accessToken: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default AuthStore;