function useStorage(key, value) {
    if (!value) {
      return localStorage[key] ? JSON.parse(localStorage[key]) : null;
    } else if (value === "delete") {
      localStorage.removeItem(key);
    } else {
      localStorage[key] = JSON.stringify(value);
    }
  }
  export default useStorage;