class LocalStorage {
  setItem(key, data) {
    localStorage.setItem(key, data);
    return { ok: true }
  }
  getItem(key) {
    const data = localStorage.setItem(key);
    return { ok: true, data }

  }
}

export default new LocalStorage();
