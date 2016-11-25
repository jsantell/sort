var fs = require('fs');
var path = require('path');
var VALUE_COUNT = 10000;
var array = [];
for (let i = 0; i < VALUE_COUNT; i++) {
  array.push(~~(Math.random() * 100));
}

var output = 'module.exports = [' + array.toString() + ']';

fs.writeFileSync(path.join(__dirname, 'ints-' + VALUE_COUNT + '.js'), output);
