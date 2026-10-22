import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
const app = express();
const root = path.resolve('dist');
const config = JSON.parse(fs.readFileSync('vercel.json','utf8'));
app.use((req,res,next) => {
 const rule = config.redirects.find(r => r.source === req.path);
 if(rule) return res.redirect(308,rule.destination);
 if(req.path.length > 1 && req.path.endsWith('/')) return res.redirect(308,req.path.slice(0,-1));
 next();
});
app.use(express.static(root, { extensions: ['html'] }));
app.use((req,res)=>res.status(404).sendFile(path.join(root,'404.html')));
export const server = app.listen(4173,'127.0.0.1',()=>console.log('Static test server on 4173'));
