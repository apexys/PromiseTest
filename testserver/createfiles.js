var fs = require('fs');
for(var i = 0; i < 1000; i++){
	fs.writeFileSync('./files/' + i, i, 'utf-8');
}
console.log('files written!');
