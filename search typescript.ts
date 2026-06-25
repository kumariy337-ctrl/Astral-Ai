const textarea = document.getElementById(
    "promptInput"
  ) as HTMLTextAreaElement;
  
  const sendBtn = document.getElementById(
    "sendBtn"
  ) as HTMLButtonElement;
  
  /* Auto Grow */
  textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  });
  
  /* Send */
  sendBtn.addEventListener("click", () => {
    const message = textarea.value.trim();
  
    if (!message) return;
  
    console.log("Message:", message);
  
    textarea.value = "";
    textarea.style.height = "auto";
  });
  
  /* Enter to Send */
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendBtn.click();
    }
  });
  