var spawn = require('child_process').exec;

// Hexo 2.x �û��������
/*hexo.on('new', function(path){
  spawn('start  D:\MarkdownPad2.exe ' + path);
});*/

// Hexo 3 �û��������
hexo.on('new', function(data){
  spawn('start   D:\MarkdownPad2.exe ' + data.path);
});