import { getProperties } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const property = await getProperties();
});
