import { chromium } from '@playwright/test';
import assert from 'node:assert/strict';
const localServer = process.env.TEST_URL ? null : (await import('./serve-built.mjs')).server;
const browser = await chromium.launch({channel:'msedge',headless:true});
const context = await browser.newContext({ viewport:{width:390,height:844} });
const page = await context.newPage();
const errors=[]; page.on('pageerror', e=>errors.push(e.message));
const base=process.env.TEST_URL || 'http://127.0.0.1:4173';
for(const route of ['/', '/bairro/centro','/blog/documentos-atendimento-plano-saude','/blog/protocolo-ans-consulta-processo-tjsp','/contato']) {
 const response=await page.goto(base+route,{waitUntil:'networkidle'});
 assert.equal(response.status(),200,route);
 assert.equal(await page.locator('h1').count(),1,route);
 assert.equal(await page.locator('link[rel=canonical]').count(),1,route);
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth+1),route+': mobile overflow');
}
await page.getByRole('button',{name:'Abrir menu',exact:true}).click();
await page.getByRole('link',{name:'Advogado Zona Centro',exact:true}).first().click();
assert.ok(page.url().endsWith('/bairro/centro'));
await page.screenshot({path:'mobile-centro.png',fullPage:true});
for(const route of ['/nao-existe-auditoria','/blog/nao-existe','/bairro/nao-existe','/especialidade/nao-existe']) {
 const response=await page.goto(base+route); assert.equal(response.status(),404,route);
 assert.equal(await page.locator('meta[name=robots]').getAttribute('content'),'noindex, follow');
}
for(const route of ['/advogado-plano-de-saude-sao-paulo','/especialidade/home-care']) {
 const response=await context.request.get(base+route,{maxRedirects:0}); assert.equal(response.status(),308,route);
}
await page.setViewportSize({width:1440,height:1000});
await page.goto(base+'/bairro/centro',{waitUntil:'networkidle'});
await page.screenshot({path:'desktop-centro.png',fullPage:true});
assert.deepEqual(errors,[]);
await browser.close();
localServer?.close();
console.log('Browser: desktop/mobile, menu, 4 HTTP404s, 2 redirects, console: PASS');

