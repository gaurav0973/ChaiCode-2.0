// whenevern my dom loads , I have tio perform some task 
document.addEventListener("DOMContentLoaded", function(){
    init();
})
{/* <div chaiClass="text-lg font-bold"></div> */}
{/* <p chaiClass="text-lg font-bold"></p> */}
{/* <h3 chaiClass="text-lg font-bold"></h3> */}
function init(){

    // 1. grab the eleembnts ion which my chaiClass attribute is present
    const elements = document.querySelectorAll("[chaiClass]");
    // elements = [div, p, h3]
    console.log("Elemetns : ", elements)

    elements.forEach((element) => {
        const tokens = parse(element.getAttribute("chaiClass"));
        tokens.forEach((token) => {
            const styles = resolve(token)
            applyCSS(element, styles);
        })
    })
    
}

function parse(chaiClassString){
    return chaiClassString.split(" ")
}

function resolve(token){
    return typography(token) || theme(token) || null
}

const map = {
  "text-sm": { 
    fontSize: "14px" 
},
  "text-base": { 
    fontSize: "16px" 
},
  "text-lg": { fontSize: "18px" },
  "text-xl": { fontSize: "20px" },
  "font-light": { fontWeight: "300" },
  "font-bold": { fontWeight: "700" },
  "text-center": { textAlign: "center" },
  "text-left": { textAlign: "left" },
  "text-right": { 
    textAlign: "right" 
},
};
function typography(token) {
  return map[token];
}

function applyCSS(element, styles){
    for(const key in styles){
        element.style[key] = styles[key]
    }
}