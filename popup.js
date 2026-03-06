const input = document.getElementById("gitlabUrl");
const saveBtn = document.getElementById("save");
const status = document.getElementById("status");

browser.storage.local.get({ gitlabUrl: "" }).then(({ gitlabUrl }) => {
  input.value = gitlabUrl;
});

saveBtn.addEventListener("click", () => {
  const url = input.value.trim().replace(/\/$/, "");
  if (!url) {
    status.className = "error";
    status.textContent = "Please enter a URL.";
    return;
  }
  browser.storage.local.set({ gitlabUrl: url }).then(() => {
    status.className = "";
    status.textContent = "Saved.";
    setTimeout(() => (status.textContent = ""), 2000);
  });
});
