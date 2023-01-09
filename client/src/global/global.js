import { writable, readable } from "svelte/store";
import io from "socket.io-client";
//loggedin USER
export const user = writable(undefined);
export const socket = io("ws://localhost:3000");
export const BASE_URL = readable("http://localhost:8080");
export const ENVIRONMENT = writable("DEVELOPMENT");
export const API_KEY = "4a86f1670d0ac4ac719f017669984e10"