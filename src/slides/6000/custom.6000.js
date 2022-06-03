const snapshot = document.querySelector(".snapshot");
const tab = document.querySelector(".tabs");
const button1 = document.querySelector(".btn-1");
const button2 = document.querySelector(".btn-2");

const btn1Click = button1.addEventListener("click", () => {
  snapshot.classList.add("hidden");
  tab.classList.remove("tab-2");
  tab.classList.add("tab-1");
});

const btn2Click = button2.addEventListener("click", () => {
  snapshot.classList.add("hidden");
  tab.classList.remove("tab-1");
  tab.classList.add("tab-2");
});
