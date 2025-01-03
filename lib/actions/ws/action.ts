// import API_CONFIG, { ActionDTO } from "@/lib/api";

// export let webSocket = null;

// export const getWebSocket = () => {
//   if (webSocket) {
//     console.warn("WebSocket is already initialized.");
//     return webSocket;
//   }

//   webSocket = new WebSocket(`${API_CONFIG.baseURL}`);
//   initializeWebSocket();

//   return webSocket;
// };

// export const initializeWebSocket = () => {
//   webSocket.onopen = () => {
//     console.log("WebSocket connection opened.");
//   };

//   webSocket.onmessage = (event) => {
//     console.log("Message from backend:", event.data);
//   };

//   webSocket.onerror = (error) => {
//     console.error("WebSocket error:", error);
//   };

//   webSocket.onclose = () => {
//     console.log("WebSocket connection closed.");
//     webSocket = null;
//   };
// };

// export const closeWebSocket = () => {
//   if (webSocket) {
//     webSocket.close();
//     webSocket = null;
//   }
// };

// export const doActionWebSocket = async ({
//   action,
//   actionCode,
//   data,
//   isTypeA,
//   actionName,
// }: ActionDTO) => {
//   if (!webSocket || webSocket.readyState !== WebSocket.OPEN) {
//     throw new Error("WebSocket is not connected.");
//   }

//   return new Promise((resolve, reject) => {
//     try {
//       webSocket.send(JSON.stringify({ action }));

//       webSocket.onmessage = (event) => {
//         const data = JSON.parse(event.data);
//         resolve(data);
//       };

//       webSocket.onerror = (error) => {
//         reject(error);
//       };
//     } catch (error) {
//       reject(error);
//     }
//   });
// };
