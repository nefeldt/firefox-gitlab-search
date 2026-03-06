const MENU_ID = "gitlab-search";
const DEFAULT_GITLAB_URL = "https://gitlab.example.com";

function buildSearchUrl(gitlabUrl, query) {
  const base = gitlabUrl.replace(/\/$/, "");
  return `${base}/search?search=${encodeURIComponent(query)}`;
}

function createContextMenu(gitlabUrl) {
  browser.contextMenus.removeAll(() => {
    browser.contextMenus.create({
      id: MENU_ID,
      title: 'Search GitLab for "%s"',
      contexts: ["selection"],
    });
  });
}

browser.storage.local.get({ gitlabUrl: DEFAULT_GITLAB_URL }).then((settings) => {
  createContextMenu(settings.gitlabUrl);
});

browser.storage.onChanged.addListener((changes) => {
  if (changes.gitlabUrl) {
    createContextMenu(changes.gitlabUrl.newValue);
  }
});

browser.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId !== MENU_ID || !info.selectionText) return;

  browser.storage.local.get({ gitlabUrl: DEFAULT_GITLAB_URL }).then((settings) => {
    const url = buildSearchUrl(settings.gitlabUrl, info.selectionText.trim());
    browser.tabs.create({ url });
  });
});
