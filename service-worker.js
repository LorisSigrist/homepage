self.addEventListener("install",()=>{self.skipWaiting()});self.addEventListener("activate",()=>{self.clients.matchAll({type:"window"}).then(t=>{t.forEach(e=>{e.navigate(e.url)})})});
