import { writable, readable } from "svelte/store";
import io from "socket.io-client";
let globalUser = localStorage.getItem("loggedIn")
export const user = writable(globalUser ? JSON.parse(globalUser) : null);
export const socket = io("ws://localhost:3000");
export const BASE_URL = readable("http://localhost:8080");