const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

   const files = [
       './dist/discount/runtime.js',
       './dist/discount/polyfills.js',
       './dist/discount/main.js',
       './dist/discount/scripts.js',
   ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/discount.js');
    await fs.copyFile('./dist/discount/styles.css' , 'elements/styles.css');
    await fs.copy('./dist/discount/assets/', 'elements/assets/');

})();