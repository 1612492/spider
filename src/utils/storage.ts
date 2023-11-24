export async function getLocal(key: string) {
  if (import.meta.env.DEV) {
    return localStorage.getItem(key);
  } else {
    const response = await chrome.storage.local.get(key);
    return response[key];
  }
}

export async function getSession(key: string) {
  if (import.meta.env.DEV) {
    return sessionStorage.getItem(key);
  } else {
    const response = await chrome.storage.session.get(key);
    return response[key];
  }
}

export async function setLocal(key: string, value: string) {
  if (import.meta.env.DEV) {
    localStorage.setItem(key, value);
  } else {
    await chrome.storage.local.set({ [key]: value });
  }
}

export async function setSession(key: string, value: string) {
  if (import.meta.env.DEV) {
    sessionStorage.setItem(key, value);
  } else {
    await chrome.storage.session.set({ [key]: value });
  }
}

export async function removeLocal(key: string) {
  if (import.meta.env.DEV) {
    localStorage.removeItem(key);
  } else {
    await chrome.storage.local.remove(key);
  }
}

export async function removeSession(key: string) {
  if (import.meta.env.DEV) {
    sessionStorage.removeItem(key);
  } else {
    await chrome.storage.session.remove(key);
  }
}
