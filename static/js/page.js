function getActiveTocElement(e){return[...e].find(e=>e.getBoundingClientRect().y<0)}function findCorrespondingTocTitle(t){return[...document.querySelectorAll("#toc li a")].find(e=>e.href.substring(e.href.indexOf("#"))==="#"+t.id)}document.addEventListener("DOMContentLoaded",function(){document.getElementById("navbar").clientHeight,document.getElementById("toc");var e=document.querySelectorAll("#toc li a");document.getElementById("page-content");let t=[];[...e].forEach(e=>{t.push(e.href.substring(e.href.indexOf("#")))});e=document.querySelectorAll(t.join(","));console.log(e);let n=[...e].reverse();e=getActiveTocElement(n)||e[0];console.log(e),findCorrespondingTocTitle(e).classList.add("bg-blue-800");let o=e;window.addEventListener("scroll",()=>{var e=getActiveTocElement(n);console.log("elem",e),console.log("previous",o),e!==o&&(o.classList.remove("bg-blue-800"),findCorrespondingTocTitle(e).classList.add("bg-blue-800"))})});