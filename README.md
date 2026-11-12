# CHARPALANCA — Web React / Vite v4.0

Migración del sitio anterior a componentes React, conservando identidad visual y fotografías. **Este proyecto no está publicado ni conectado a cuentas externas.**

## Requisitos
- Node.js 20.19+ o 22.12+.
- npm.

## Ejecutar localmente
```bash
npm install
npm run check
npm run dev
```
Abre la dirección local que muestre Vite (normalmente `http://localhost:5173`).

## Compilación de producción
```bash
npm run build
npm run preview
```
`dist/` es la carpeta generada para publicar. **Nota:** en el entorno en que se preparó este ZIP, npm no pudo acceder a registry.npmjs.org, por lo que la compilación con Vite no pudo ejecutarse; se comprobaron la sintaxis JSX y los recursos locales. Es necesario ejecutar `npm install` y `npm run build` en un equipo con Internet.

## Publicar en GitHub
1. Crea un repositorio vacío, por ejemplo `charpalanca-web` (no marques README inicial).
2. Abre una terminal dentro de la carpeta extraída, donde está `package.json`.
3. Ejecuta:
```bash
git init
git add .
git commit -m "Charpalanca: sitio React"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/charpalanca-web.git
git push -u origin main
```
Sustituye `TU_USUARIO` por tu usuario de GitHub. Inicia sesión en GitHub cuando se solicite. No subas `node_modules/`, `dist/` ni secretos; están en `.gitignore`.

## Vincular con Vercel
1. En Vercel, **Add New > Project** y elige **Import Git Repository**.
2. Autoriza el repositorio `charpalanca-web`.
3. Selecciona el directorio raíz del repositorio (`./`).
4. Framework Preset: **Vite**; Build Command: `npm run build`; Output Directory: `dist`; Install Command: `npm install`.
5. Selecciona **Deploy**. Al completarse, Vercel mostrará una URL pública `*.vercel.app`.
6. Prueba directamente `/variedades/naranja`, recarga la página y comprueba el selector de idiomas, el carrusel y las imágenes.
7. Cada nuevo push a `main` puede crear un nuevo despliegue automáticamente.

`vercel.json` incluye una reescritura a `index.html` para que las rutas SPA de React Router funcionen al refrescar. Las imágenes se sirven desde `public/assets/` sin conversión de rutas. No necesitas variables de entorno ni backend para esta demostración.

## Páginas
- `/` — Inicio
- `/variedades` — Catálogo; imágenes cambian de ángulo con el cursor, sin botón «Segundo ángulo»
- `/variedades/pina`, `/variedades/naranja`, `/variedades/coco`, `/variedades/durazno` — Fichas con carrusel (flechas, puntos, teclado y deslizamiento táctil)
- `/historia`, `/esencia`, `/identidad`, `/galeria`, `/contacto`

## Añadir nuevas fotografías al carrusel
1. Optimiza la fotografía en formato `.webp`.
2. Guárdala en `public/assets/`, por ejemplo `naranja-detalle.webp`.
3. Agrega `'naranja-detalle'` al arreglo `naranja` en `src/data/productImages.js`.
4. El carrusel generará automáticamente un indicador adicional.

## Estructura
- `src/App.jsx`: componentes React, rutas, tarjetas y carrusel.
- `src/data/translations.json`: contenido y traducciones ES / EN / PT.
- `src/data/productImages.js`: lista de fotografías por variedad.
- `src/legacy.css`: estilos base recuperados del sitio v3.
- `src/react.css`: correcciones y estilos de componentes React.
- `public/assets/`: imágenes aprobadas de la marca.
- `vercel.json`: configuración SPA para Vercel.
- `.github/workflows/build.yml`: comprobación de compilación en GitHub.

## Alcance y cumplimiento
Las fotografías y presentaciones son conceptuales. No se incluyen precios, tienda, pago, registro sanitario ni afirmaciones comerciales sin verificar. Antes de publicar como marca comercial, revisar contenido, normativa aplicable, derechos de los recursos y comportamiento en dispositivos reales.
