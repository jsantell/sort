var fs = require('fs');
var path = require('path');
var VALUE_COUNT = 10000;
var array = [];
for (let i = 0; i < VALUE_COUNT; i++) {
  array.push(Number((Math.random() * 100).toFixed(2)));
}

var output = 'module.exports = [' + array.toString() + ']';

fs.writeFileSync(path.join(__dirname, 'floats-' + VALUE_COUNT + '.js'), output);
