require('shelljs/global');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

if (test('-d', 'hidapi')) {
    cd('hidapi')
	// Run external tool synchronously
	if (exec('git pull').code !== 0) {
	  echo('Error: Git pull in hidapi failed');
	  exit(1);
	}
    cd('..')
}
else {
   	if (exec('git clone https://github.com/signal11/hidapi.git').code !== 0) {
	  echo('Error: git clone https://github.com/signal11/hidapi.git');
	  exit(1);
	}
}
