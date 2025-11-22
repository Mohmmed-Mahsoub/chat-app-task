import { initializeApp } from "./views/chatView.js";
import "./styles/main.css";

// Pure initialization function
const init = () => {
  console.log("Initializing Chat Application");
  initializeApp();
};

// Start application
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
