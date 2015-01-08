cd /tmp

rm -rf DockerProject

git clone https://github.com/jmuel/DockerProject.git

cd DockerProject

npm install

npm install -g gulp

gulp build

nodejs server.js