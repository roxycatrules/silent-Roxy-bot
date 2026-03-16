javascript:(function(){
  if(window._roxyBot){window._roxyBot.stop();return;}
  const URL='https://raw.githubusercontent.com/roxycatrules/silent-Roxy-bot/main/bot.js';
  const hud=document.createElement('div');
  hud.style.cssText='position:fixed;bottom:20px;right:20px;z-index:999999;background:#050505;color:#ff2d78;border:1px solid #ff2d78;border-radius:10px;padding:10px 16px;font:700 12px "Courier New",monospace;box-shadow:0 0 20px rgba(255,45,120,.35);';
  hud.textContent='🌹 Roxy: loading...';
  document.body.appendChild(hud);
  fetch(URL+'?t='+Date.now())
    .then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.text();})
    .then(code=>{hud.remove();eval(code);})
    .catch(e=>{hud.textContent='🌹 Roxy: failed — '+e.message;setTimeout(()=>hud.remove(),3000);});
})();
