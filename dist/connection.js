!function(){function e(t,n){return n?require(t):t.slice?e[r(t)]:function(n,o){t(n={exports:{}}),e[r(o)]=n.exports};function r(e){return e.split("/").slice(-1).toString().replace(".js","")}}if("undefined"!=typeof module)var t=module;e(function(e){"undefined"!=typeof window&&(e.window=window);var n=(e.window||e).AXE||function(){};(n.window=e.window)&&(n.window.AXE=n);try{void 0!==t&&(t.exports=n)}catch(e){}e.exports=n})(e,"./root"),e(function(t){var n=e("./root"),r=(n.window||"").Database||e("./gun",1);(r.AXE=n).Database=n.database=r;if(!r.window)try{e("./lib/axe",1)}catch(e){}r.on("opt",function(e){!function(e){if(e.axe)return;var t=e.opt,n=t.peers;if(!1===t.axe)return;if("undefined"!=typeof process&&"false"==""+(process.env||"").AXE)return;if(!r.window)return;var o,i;e.axe={};(o=n[i="http://localhost:8765/gun"]=n[i]||{}).id=o.url=i,o.retry=o.retry||0;var a=JSON.parse((localStorage||"")[(t.file||"")+"axe/"]||null)||{};Object.keys(a.peers||"").forEach(function(e){(o=n[i=e]=n[i]||{}).id=o.url=i}),(o=n[i="https://guntest.herokuapp.com/gun"]=n[i]||{}).id=o.url=i;var s=t.mesh=t.mesh||r.Mesh(e);s.way=function(n){if(e.$===n.$||(n._||"").via)s.say(n,t.peers);else{var r=(n.$||"")._;if(r){if(n.get){if(r.axe)return;r.axe={}}s.say(n,t.peers)}else s.say(n,t.peers)}}}(e),this.to.next(e)});t.exports=n})(e,"./axe")}();
