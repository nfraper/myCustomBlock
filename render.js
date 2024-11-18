const fs = require('fs');
const path = require('path');
const { createRenderer } = require('vue-server-renderer');
const { default: CustomBlock } = require('./dist/custom-block.js');

const renderer = createRenderer();

renderer.renderToString(CustomBlock, (err, html) => {
  if (err) throw err;
  fs.writeFileSync(path.join(__dirname, 'dist', 'custom-block.html'), html);
});
