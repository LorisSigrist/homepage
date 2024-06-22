import { w as writable } from "./index.CU0sutvA.js";
const LOCAL_STORAGE_KEY = "theme";
const initial_theme = "localStorage" in globalThis ? localStorage.getItem(LOCAL_STORAGE_KEY) === "dark" ? "dark" : "light" : "light";
const theme = writable(initial_theme);
theme.subscribe((value) => {
  if ("localStorage" in globalThis) {
    localStorage.setItem(LOCAL_STORAGE_KEY, value);
    document.documentElement.classList.toggle("dark", value === "dark");
  }
});
export {
  theme as t
};
