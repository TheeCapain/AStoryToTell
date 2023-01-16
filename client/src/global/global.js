import { writable } from "svelte/store";
import io from "socket.io-client";
let globalUser = localStorage.getItem("loggedIn")
export const user = writable(globalUser ? JSON.parse(globalUser) : null);
export const socket = io("ws://localhost:3000");