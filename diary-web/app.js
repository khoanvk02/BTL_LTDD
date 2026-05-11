const USERS = {
  minh: { password: "123456", displayName: "Minh" },
  an: { password: "123456", displayName: "An" }
};

const STORAGE_KEYS = {
  currentUser: "diary.currentUser",
  entries: "diary.entries"
};

const loginCard = document.getElementById("loginCard");
const diaryCard = document.getElementById("diaryCard");
const loginForm = document.getElementById("loginForm");
const entryForm = document.getElementById("entryForm");
const entriesEl = document.getElementById("entries");
const displayNameEl = document.getElementById("displayName");
const loginMessageEl = document.getElementById("loginMessage");
const logoutBtn = document.getElementById("logoutBtn");

function nowFormatted() {
  return new Date().toLocaleString("vi-VN", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
}

function getCurrentUser() {
  return localStorage.getItem(STORAGE_KEYS.currentUser);
}

function setCurrentUser(username) {
  localStorage.setItem(STORAGE_KEYS.currentUser, username);
}

function getEntries() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.entries) || "[]");
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEYS.entries, JSON.stringify(entries));
}

function renderEntries() {
  const entries = getEntries().sort((a, b) => b.createdAt - a.createdAt);

  if (!entries.length) {
    entriesEl.innerHTML = `<div class="empty">Chưa có nhật ký nào. Hãy viết bài đầu tiên ✨</div>`;
    return;
  }

  entriesEl.innerHTML = entries
    .map(
      (entry) => `
      <article class="entry">
        <div class="entry-header">
          <div class="entry-title">${entry.title}</div>
          <div class="entry-meta">${entry.author} • ${entry.timestamp}</div>
        </div>
        <div class="entry-content">${entry.content}</div>
      </article>
    `
    )
    .join("");
}

function showDiary(username) {
  loginCard.classList.add("hidden");
  diaryCard.classList.remove("hidden");
  displayNameEl.textContent = USERS[username].displayName;
  renderEntries();
}

function showLogin() {
  diaryCard.classList.add("hidden");
  loginCard.classList.remove("hidden");
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  if (!USERS[username] || USERS[username].password !== password) {
    loginMessageEl.textContent = "Sai tài khoản hoặc mật khẩu.";
    loginMessageEl.style.color = "var(--danger)";
    return;
  }

  loginMessageEl.textContent = "Đăng nhập thành công!";
  loginMessageEl.style.color = "#4ade80";
  setCurrentUser(username);
  showDiary(username);
});

entryForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = getCurrentUser();
  if (!user) return;

  const title = document.getElementById("entryTitle").value.trim();
  const content = document.getElementById("entryContent").value.trim();
  if (!title || !content) return;

  const entries = getEntries();
  entries.push({
    title,
    content,
    author: USERS[user].displayName,
    timestamp: nowFormatted(),
    createdAt: Date.now()
  });

  saveEntries(entries);
  entryForm.reset();
  renderEntries();
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEYS.currentUser);
  showLogin();
});

window.addEventListener("DOMContentLoaded", () => {
  const current = getCurrentUser();
  if (current && USERS[current]) {
    showDiary(current);
  } else {
    showLogin();
  }
});
