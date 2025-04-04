const button = document.getElementById("clickBtn") as HTMLButtonElement;
const message = document.getElementById("message") as HTMLParagraphElement;

button.addEventListener("click", () => {
  message.textContent = "Button clicked! TypeScript is working 🎉";
});
