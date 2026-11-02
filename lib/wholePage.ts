// A page that arrived only in part: the browser kept a download that stopped
// partway (a refresh, a click away) and showed it again as the page, cut off:
// white, with no error anywhere. Two signs of it, and one repair. The page's
// visible part ends with a marker (#__end, the layout's last element): missing
// once the page has finished loading, the page was cut before it. The data
// the page is built from comes after it: cut there, React reports the stream
// "Connection closed" (an error, or to the error boundary, which hands it to
// window.__pageCut). Either way the page is fetched fresh, which replaces the
// partial copy, and loaded again: once per page per visit, so a page that
// really is cut short never loops. It is the first script on the page, so it
// runs however early the page was cut.
export const WHOLE_PAGE = `(function(){var k="whole:"+location.pathname,done=false;function fix(why){if(done)return;done=true;try{if(sessionStorage.getItem(k))return;sessionStorage.setItem(k,"1")}catch(e){}if(window.__report)window.__report("partial-page",{why:why,url:location.href});fetch(location.href,{cache:"reload",credentials:"same-origin"}).catch(function(){}).then(function(){location.reload()})}function cut(m){return /Connection closed/i.test(String(m||""))}window.__pageCut=function(m){if(cut(m))fix("data cut")};addEventListener("error",function(e){if(cut(e.message))fix("data cut")});addEventListener("unhandledrejection",function(e){var r=e.reason;if(cut(r&&(r.message||r)))fix("data cut")});addEventListener("DOMContentLoaded",function(){if(document.getElementById("__end")){addEventListener("load",function(){if(!done)try{sessionStorage.removeItem(k)}catch(e){}});return}fix("page cut")})})();`;
