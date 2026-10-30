// The error panel: every script error, failed promise, failed script or
// stylesheet load, and a page still blank five seconds after it loaded, shown
// on the page itself in a red box at the bottom of the screen, so a reader
// who meets a blank page sees why without opening any tools. It runs before
// anything else on the page and needs nothing else to have loaded. A load
// that failed and made the page reload itself is shown again after the
// reload, marked as such.
export const ERROR_PANEL = `(function(){
var L=[],K="__errs";
function c(v){return String(v==null?"":v).slice(0,600)}
function box(){var b=document.getElementById("__err");if(b)return b;if(!document.body)return null;b=document.createElement("div");b.id="__err";b.setAttribute("style","position:fixed;left:8px;right:8px;bottom:8px;z-index:2147483647;max-height:60vh;overflow:auto;background:#fff;color:#111;border:2px solid #b91c1c;border-radius:10px;padding:12px;font:12px/1.45 ui-monospace,Menlo,monospace;box-shadow:0 6px 24px rgba(0,0,0,.3);white-space:pre-wrap;word-break:break-word;text-align:left");document.body.appendChild(b);return b}
function render(){var b=box();if(!b)return;b.textContent="";var h=document.createElement("div");h.textContent="Page error ("+L.length+") at "+location.href;h.setAttribute("style","font-weight:700;color:#b91c1c;margin-bottom:6px");b.appendChild(h);var p=document.createElement("div");p.textContent=L.join("\\n\\n");b.appendChild(p);[["Reload",function(){location.reload()}],["Close",function(){b.remove()}]].forEach(function(a){var e=document.createElement("button");e.type="button";e.textContent=a[0];e.onclick=a[1];e.setAttribute("style","margin:10px 8px 0 0;padding:4px 12px;border:1px solid #999;border-radius:6px;background:#f5f5f5;color:#111;cursor:pointer;font:inherit");b.appendChild(e)})}
function add(s){L.push(new Date().toTimeString().slice(0,8)+"  "+s);if(document.body)render();else document.addEventListener("DOMContentLoaded",render)}
window.__showError=add;
try{var prev=JSON.parse(sessionStorage.getItem(K)||"[]");sessionStorage.removeItem(K);prev.forEach(function(x){add("before the page reloaded itself: "+x)})}catch(e){}
window.addEventListener("error",function(e){var t=e.target;if(t&&t!==window&&(t.src||t.href)){if(t.tagName!=="SCRIPT"&&t.tagName!=="LINK")return;var u=c(t.src||t.href);add("failed to load "+t.tagName.toLowerCase()+": "+u);if(t.tagName==="SCRIPT"&&u.indexOf("/_next/")!==-1){try{sessionStorage.setItem(K,JSON.stringify(["failed to load script: "+u]))}catch(x){}}return}add("error: "+c(e.message)+"\\n  at "+c(e.filename)+":"+e.lineno+":"+e.colno+(e.error&&e.error.stack?"\\n"+c(e.error.stack):""))},true);
window.addEventListener("unhandledrejection",function(e){var r=e.reason;add("unhandled rejection: "+c(r&&(r.message||r))+(r&&r.stack?"\\n"+c(r.stack):""))});
setTimeout(function(){try{var b=document.body;if(b&&b.innerText.trim().length>0)return;var n=performance.getEntriesByType("navigation")[0]||{},f=[];performance.getEntriesByType("resource").forEach(function(r){if((r.responseStatus&&r.responseStatus>=400)||(/\\.(js|css)(\\?|$)/.test(r.name)&&r.transferSize===0&&r.decodedBodySize===0&&r.duration>0&&!r.encodedBodySize))f.push(r.name+(r.responseStatus?" "+r.responseStatus:" (no response)"))});add("blank page after 5 seconds\\n  document: "+document.readyState+", navigation: "+(n.type||"?")+", status: "+(n.responseStatus||"?")+", html bytes: "+(n.decodedBodySize||"?")+"\\n  scripts on page: "+document.scripts.length+", stylesheets: "+document.styleSheets.length+(f.length?"\\n  failed: "+f.join("\\n          "):""))}catch(x){add("blank page; the check itself failed: "+c(x&&x.message))}},5000);
})();`;
