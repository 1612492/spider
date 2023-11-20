export const local = {
  get: async (key: string) => {
    return chrome.storage.local.get(key);
  },
  set: async (key: string, value: string) => {
    return chrome.storage.local.set({ [key]: value });
  }
};

export const session = {
  get: async (key: string) => {
    return chrome.storage.session.get(key);
  },
  set: async (key: string, value: string) => {
    return chrome.storage.session.set({ [key]: value });
  }
};
