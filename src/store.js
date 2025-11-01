import { create } from "zustand";

export const useCountryStore = create((set) => ({
    currentCountry: 1,
    setCurrentCountry: (country) => set({currentCountry: country})
}))


export const useTabStore = create((set) => ({
    activeTab: 1,
    setActiveTab: (tab) => set({activeTab: tab})
}))

export const useCountryReminder = create((set) => ({
    confirmed: false,
    setConfirmed: (confirmation) => set({confirmed: confirmation})
}))

export const useActiveImageIndex = create((set) => ({
    activeImg: 0,
    setActiveImg: (index) => set({activeImg: index})
}))