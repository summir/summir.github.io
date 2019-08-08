var spawn = require('child_process').exec;

// Hexo 2.x 用户复制这段
/*hexo.on('new', function(path){
  spawn('start  "C:\Users\summit\AppData\Local\atom\atom.exe" ' + path);
});*/

// Hexo 3 用户复制这段
hexo.on('new', function(data){
  spawn('start   "C:\Users\summit\AppData\Local\atom\atom.exe" ' + data.path);
});