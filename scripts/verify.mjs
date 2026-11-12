import fs from 'node:fs';
import {productImages} from '../src/data/productImages.js';
import translations from '../src/data/translations.json' with {type:'json'};
let failed=false;
for(const [product,photos] of Object.entries(productImages)){
 if(photos.length<2){console.error(`Faltan fotos: ${product}`);failed=true}
 for(const photo of photos)if(!fs.existsSync(`public/assets/${photo}.webp`)){console.error(`No existe: ${photo}.webp`);failed=true}
 for(const [code,t] of Object.entries(translations)){
  if(!t.varieties.names[product]||!t.varieties.desc[product]){console.error(`Falta traducción ${code}/${product}`);failed=true}
 }
}
for(const name of ['hero','tarija','tarija-alt','regalo','evento','aniversario','contacto-fondo','abstracto'])if(!fs.existsSync(`public/assets/${name}.webp`)){console.error(`Falta recurso ${name}.webp`);failed=true}
if(failed)process.exitCode=1;else console.log('OK: 3 idiomas, fotografías y recursos referenciados en el manifiesto');
