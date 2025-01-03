import { METHODS } from "@/app/(tabs)/settings";
import API_CONFIG, { ActionDTO } from "../api";
import { ACTION } from "../endpoints";

class ActionService {
  webSocket: null | WebSocket;
  webSocketURL: string;
  currentMethod: METHODS;

  constructor() {
    this.webSocket = null;
    this.webSocketURL = `${API_CONFIG.baseURL}/ws`;
    this.currentMethod = "HTTP";
  }

  getMethod() {
    return this.currentMethod;
  }

  setMethod(method) {
    this.currentMethod = method;
    if (method === "WebSocket" && !this.webSocket) {
      this.initWebSocket();
    }
  }

  initWebSocket() {
    this.webSocket = new WebSocket(this.webSocketURL.replace("http", "ws"));

    this.webSocket.onopen = () => {
      console.log("WebSocket connection opened.");
    };

    this.webSocket.onmessage = (event) => {
      console.log("Message from backend:", event.data);
    };

    this.webSocket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    this.webSocket.onclose = () => {
      console.log("WebSocket connection closed.");
      this.webSocket = null;
    };
  }

  doActionWebSocket({ action }: ActionDTO) {
    if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
      return new Promise((resolve, reject) => {
        this.webSocket.send(JSON.stringify({ action }));

        this.webSocket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          return resolve({
            status: true,
            message: "success",
            data,
          });
        };

        return resolve({
          status: true,
          message: "Command sent via WebSocket",
        });
      });
    } else {
      console.error("WebSocket is not connected.");
      return Promise.reject("WebSocket is not connected.");
    }
  }

  getWebSocket() {
    if (this.webSocket && this.webSocket.readyState === WebSocket.OPEN) {
      return this.webSocket;
    }

    this.initWebSocket();
    return this.webSocket;
  }

  closeWebSocket() {
    if (this.webSocket) {
      this.webSocket.close();
      this.webSocket = null;
    }
  }
}

export default new ActionService();
