require('shelljs/global');

if (test('-d', 'build')) {
   	if (exec('node-gyp clean').code !== 0) {
	  echo('Error: node-gyp clean');
	  exit(1);
	}
}
if (exec('node-gyp configure build install').code !== 0) {
  echo('node-gyp configure build install');
  exit(1);
}
