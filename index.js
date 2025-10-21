// Show current time in milliseconds
document.addEventListener("DOMContentLoaded", () => {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');
  
  const updateTime = () => {
    timeEl.textContent = Date.now();
  };

  updateTime(); // Initial time
  setInterval(updateTime, 1000); // Update every second
});
