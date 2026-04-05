/**
 * HR Assistant Chatbot – Main Application Logic
 * Retrieves answers from knowledge.js based on user queries
 */

(function () {
  "use strict";

  // ──── DOM Elements ────
  const chatArea = document.getElementById("chat-area");
  const userInput = document.getElementById("user-input");
  const btnSend = document.getElementById("btn-send");
  const btnClear = document.getElementById("btn-clear");
  const quickActions = document.getElementById("quick-actions");

  // ──── State ────
  let isProcessing = false;

  // ──── Init ────
  function init() {
    renderWelcome();
    renderBotMessage(WELCOME_MESSAGE);
    bindEvents();
    userInput.focus();
  }

  // ──── Events ────
  function bindEvents() {
    btnSend.addEventListener("click", handleSend);

    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    });

    // Auto-resize textarea
    userInput.addEventListener("input", () => {
      userInput.style.height = "auto";
      userInput.style.height = Math.min(userInput.scrollHeight, 120) + "px";
    });

    // Quick action buttons
    quickActions.addEventListener("click", (e) => {
      const btn = e.target.closest(".quick-btn");
      if (!btn) return;
      const query = btn.getAttribute("data-query");
      if (query) {
        userInput.value = query;
        handleSend();
      }
    });

    // Clear chat
    btnClear.addEventListener("click", () => {
      chatArea.innerHTML = "";
      renderWelcome();
      renderBotMessage(WELCOME_MESSAGE);
      quickActions.style.display = "flex";
      userInput.focus();
    });
  }

  // ──── Handle Send ────
  function handleSend() {
    const text = userInput.value.trim();
    if (!text || isProcessing) return;

    isProcessing = true;
    btnSend.disabled = true;

    // Hide quick actions after first message
    quickActions.style.display = "none";

    // Render user message
    renderUserMessage(text);

    // Clear input
    userInput.value = "";
    userInput.style.height = "auto";

    // Show typing indicator
    const typingEl = renderTyping();

    // Simulate processing delay
    const delay = 600 + Math.random() * 800;
    setTimeout(() => {
      typingEl.remove();
      const answer = findAnswer(text);
      renderBotMessage(answer);
      isProcessing = false;
      btnSend.disabled = false;
      userInput.focus();
    }, delay);
  }

  // ──── Answer Retrieval ────
  function findAnswer(query) {
    const normalized = normalizeText(query);
    const queryTokens = tokenize(normalized);

    let bestMatch = null;
    let bestScore = 0;

    for (const entry of KNOWLEDGE_BASE) {
      let score = 0;

      for (const keyword of entry.keywords) {
        const kwNorm = normalizeText(keyword);

        // Exact substring match in query (highest weight)
        if (normalized.includes(kwNorm)) {
          score += 5;
          continue;
        }

        // Token-level matching
        const kwTokens = tokenize(kwNorm);
        for (const kwToken of kwTokens) {
          for (const qToken of queryTokens) {
            if (qToken === kwToken) {
              score += 3;
            } else if (qToken.includes(kwToken) || kwToken.includes(qToken)) {
              score += 1.5;
            }
          }
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    }

    // Threshold check
    if (bestMatch && bestScore >= 3) {
      return bestMatch.answer;
    }

    return DEFAULT_ANSWER;
  }

  function normalizeText(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")      // remove diacritics
      .replace(/đ/g, "d").replace(/Đ/g, "D")
      .replace(/[^\w\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenize(text) {
    return text.split(" ").filter((t) => t.length > 1);
  }

  // ──── Render Functions ────
  function renderWelcome() {
    const el = document.createElement("div");
    el.className = "welcome-card";
    el.innerHTML = `
      <div class="welcome-icon">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4v2H8V6a4 4 0 0 1 4-4z"/>
          <rect x="3" y="8" width="18" height="12" rx="3"/>
          <circle cx="9" cy="14" r="1.5"/>
          <circle cx="15" cy="14" r="1.5"/>
        </svg>
      </div>
      <h2>HR Assistant</h2>
      <p>Trợ lý hỏi đáp quy trình nghỉ phép – Tra cứu nhanh, chính xác từ cơ sở dữ liệu nội bộ.</p>
    `;
    chatArea.appendChild(el);
  }

  function renderUserMessage(text) {
    const el = createMessage("user", escapeHtml(text));
    chatArea.appendChild(el);
    scrollToBottom();
  }

  function renderBotMessage(html) {
    const el = createMessage("bot", html);
    chatArea.appendChild(el);
    scrollToBottom();
  }

  function createMessage(role, content) {
    const wrapper = document.createElement("div");
    wrapper.className = `message ${role}`;

    const avatar = document.createElement("div");
    avatar.className = "msg-avatar";
    avatar.innerHTML = role === "bot"
      ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4v2H8V6a4 4 0 0 1 4-4z"/><rect x="3" y="8" width="18" height="12" rx="3"/><circle cx="9" cy="14" r="1.5"/><circle cx="15" cy="14" r="1.5"/></svg>`
      : "👤";

    const contentDiv = document.createElement("div");
    contentDiv.className = "msg-content";

    const bubble = document.createElement("div");
    bubble.className = "msg-bubble";
    bubble.innerHTML = content;

    const time = document.createElement("span");
    time.className = "msg-time";
    time.textContent = formatTime(new Date());

    contentDiv.appendChild(bubble);
    contentDiv.appendChild(time);

    wrapper.appendChild(avatar);
    wrapper.appendChild(contentDiv);

    return wrapper;
  }

  function renderTyping() {
    const wrapper = document.createElement("div");
    wrapper.className = "message bot";

    const avatar = document.createElement("div");
    avatar.className = "msg-avatar";
    avatar.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4v2H8V6a4 4 0 0 1 4-4z"/><rect x="3" y="8" width="18" height="12" rx="3"/><circle cx="9" cy="14" r="1.5"/><circle cx="15" cy="14" r="1.5"/></svg>`;

    const indicator = document.createElement("div");
    indicator.className = "typing-indicator";
    indicator.innerHTML = `
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    `;

    wrapper.appendChild(avatar);
    wrapper.appendChild(indicator);
    chatArea.appendChild(wrapper);
    scrollToBottom();

    return wrapper;
  }

  // ──── Utilities ────
  function scrollToBottom() {
    requestAnimationFrame(() => {
      chatArea.scrollTop = chatArea.scrollHeight;
    });
  }

  function formatTime(date) {
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // ──── Start ────
  document.addEventListener("DOMContentLoaded", init);
})();
