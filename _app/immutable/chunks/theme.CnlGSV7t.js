import { w as writable } from "./index.CM8zyEcB.js";
const LOCAL_STORAGE_KEY = "theme";
const hasLocalStorage = typeof globalThis !== "undefined" && typeof globalThis.localStorage !== "undefined" && typeof globalThis.localStorage.getItem === "function" && typeof globalThis.localStorage.setItem === "function";
const hasDocument = typeof document !== "undefined";
const initial_theme = hasLocalStorage ? globalThis.localStorage.getItem(LOCAL_STORAGE_KEY) === "dark" ? "dark" : "light" : "light";
const theme = writable(initial_theme);
theme.subscribe((value) => {
  if (hasLocalStorage) {
    globalThis.localStorage.setItem(LOCAL_STORAGE_KEY, value);
  }
  if (hasDocument) {
    document.documentElement.classList.toggle("dark", value === "dark");
  }
});
export {
  theme as t
};
