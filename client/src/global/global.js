import { writable, readable } from "svelte/store";

export const user = writable(null);

export const BASE_URL = readable("http://localhost:8080");