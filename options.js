const input = document.getElementById("gitlabUrl");
const saveBtn = document.getElementById("save");
const status = document.getElementById("status");

browser.storage.local.get({ gitlabUrl: "" }).then((settings) => {
  input.value = settings.gitlabUrl;
});

saveBtn.addEventListener("click", () => {
  const url = input.value.trim().replace(/\/$/, "");
  if (!url) {
    status.style.color = "red";
    status.textContent = "Please enter a URL.";
    return;
  }
  browser.storage.local.set({ gitlabUrl: url }).then(() => {
    status.style.color = "green";
    status.textContent = "Saved.";
    setTimeout(() => (status.textContent = ""), 2000);
  });
});
