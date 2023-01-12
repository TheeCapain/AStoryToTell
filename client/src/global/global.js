import { writable, readable } from "svelte/store";
import io from "socket.io-client";
//loggedin USER

let globalUser = localStorage.getItem("loggedIn")
export const user1 = writable(undefined)
export const user = writable(globalUser ? JSON.parse(globalUser) : null);
export const socket = io("ws://localhost:3000");
export const BASE_URL = readable("http://localhost:8080");
export const ENVIRONMENT = writable("DEVELOPMENT");
export const API_KEY = "4a86f1670d0ac4ac719f017669984e10"