import { createRoot } from "react-dom/client";
import "./dashboard.scss";
import App from "./Components/App";
import { dashboardInfo } from "./utils/data";

document.addEventListener("DOMContentLoaded", () => {
  const dashboardEl = document.getElementById("vpbDashboard");
  if (!dashboardEl?.dataset.info) return;

  let info;
  try {
    info = JSON.parse(dashboardEl.dataset.info);
  } catch (e) {
    console.error("vpbDashboard: failed to parse data-info", e);
    return;
  }

  createRoot(dashboardEl).render(<App {...dashboardInfo(info)} />);
  dashboardEl.removeAttribute("data-info");
});
