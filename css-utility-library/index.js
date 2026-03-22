// jab bhi mera DOM load ho, tb ye function chala do
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    // jo maine apna css likhha hai, vo samajhne wale css me le aao
    init();
  });
}

// <div class="bg-red chai-creame">h1</div>
function init() {
  //1. elements = pata karo ki kaun-kaun se element par ye likha hua hai ?
  //2. ab jinn-jinn elements par likha hua hai, unn sabpar ek-ek karke jaao
  // "p-4 rounded"
  // 1. tokens =  ["p-4", "rounded"]
  // 2. ["p-4", "rounded"] => harr tokan ka matlab kya hai, pata karo and apply karo
  // 1. styataole = P-4 => iska matab b
  // 2. apply that style

  const elements = document.querySelectorAll("[chaiClass]");
  console.log("Elements : ",elements)
  if(!elements)
    return
  elements.forEach((element) => {
    console.log("Attributes in chaiClass :", element.getAttribute("chaiClass"))
    const tokens = parse(element.getAttribute("chaiClass"));
    if(!tokens)
        return
    console.log("Tokens: ", tokens)
    tokens.forEach((token) => {
      const styles = resolve(token);
      console.log("Styles : ", styles)
      if (styles) 
        applyStyle(element, styles);
    });
  });
}

function parse(chaiClassString) {
  // returns an array
  return chaiClassString.trim().split(/\s+/).filter(Boolean);
}
function resolve(token) {
  // various kkind of utilitys
  // - spacing : margin/padding/gap
  // - display : inline/block
  // - layout : dispay-flex
  return typography(token);
}

const map = {
  "text-sm": { fontSize: "14px" },
  "text-base": { fontSize: "16px" },
  "text-lg": { fontSize: "18px" },
  "text-xl": { fontSize: "20px" },
  "font-light": { fontWeight: "300" },
  "font-bold": { fontWeight: "700" },
  "text-center": { textAlign: "center" },
  "text-left": { textAlign: "left" },
  "text-right": { textAlign: "right" },
};
function typography(token) {
  return map[token];
}

function applyStyle(element, styles) {
  for (const key in styles) {
    element.style[key] = styles[key];
  }
}
