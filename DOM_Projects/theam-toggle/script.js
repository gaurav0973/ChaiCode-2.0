const THEME_KEY = "theme";

const toggleBtn = document.getElementById("toggleBtn");
const btnText = document.getElementById("btnText");
const modeText = document.getElementById("modeText");

let theme = localStorage.getItem(THEME_KEY) || "light";

/*
1. apply the theme => iska logic pahlae likhna hoga 
2. toggleBtn logic
3. T press karne par theme toggle hhoga
*/

applyTheme(theme);
toggleBtn.addEventListener("click", toggleTheme);

function applyTheme(theme){
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  btnText.textContent = isDark
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
  modeText.textContent = `Current mode: ${isDark ? "Dark" : "Light"}`;
  localStorage.setItem(THEME_KEY,theme);
}

function toggleTheme(){
  theme = theme === "dark" ? "light" : "dark";
  applyTheme(theme);
}

window.addEventListener("keydown", (e)=>{
  if(e.key.toLowerCase() === "t"){
    toggleTheme();
  }
});