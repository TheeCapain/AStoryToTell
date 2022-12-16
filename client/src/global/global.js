import { writable, readable } from "svelte/store";
//loggedin USER
export const user = writable(null);

export const BASE_URL = readable("http://localhost:8080");
export const API_KEY = "4a86f1670d0ac4ac719f017669984e10"