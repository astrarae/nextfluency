import { create } from "zustand";
import { light_theme, dark_theme } from "./themes";

export const useCountryStore = create((set) => ({
  currentCountry: 1,
  setCurrentCountry: (country) => set({ currentCountry: country }),
}));

export const useTabStore = create((set) => ({
  activeTab: 1,
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export const useCountryReminder = create((set) => ({
  confirmed: false,
  setConfirmed: (confirmation) => set({ confirmed: confirmation }),
}));

export const useActiveImageIndex = create((set) => ({
  activeImg: 0,
  setActiveImg: (index) => set({ activeImg: index }),
}));

export const useCurrentPage = create((set) => ({
  currentPage: "home",
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export const useUserStore = create((set) => ({
  userName: "Ученик", // { username, picture, email }
  setUserName: (userData) => set({ userName: userData }),
  clearUserName: () => set({ user: null }),

  userProfilePicture:
    "https://i.pinimg.com/1200x/27/a4/4a/27a44afab7ed4ba4ca8496ac888b9dc1.jpg",
  setUserProfilePicture: (userPicture) =>
    set({ userProfilePicture: userPicture }),

  userBackgroundPicture:
    "https://i.pinimg.com/736x/0a/9d/cd/0a9dcddcfe4b3df1e6a82f214bbc046e.jpg",
  setUserBackgroundPicture: (userPicture) =>
    set({ userBackgroundPicture: userPicture }),
}));

export const useTheme = create((set) => ({
  theme: light_theme,
  setTheme: (theme) => set({ theme: theme }),
}));
