var spawn = require('child_process').exec;

// Hexo 2.x �û��������
/*hexo.on('new', function(path){
  spawn('start  "C:\Users\summit\AppData\Local\atom\atom.exe" ' + path);
});*/

// Hexo 3 �û��������
hexo.on('new', function(data){
  spawn('start   "C:\Users\summit\AppData\Local\atom\atom.exe" ' + data.path);
});