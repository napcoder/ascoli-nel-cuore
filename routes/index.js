
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '' });
};

exports.health = function(req, res) {
  res.send('1');
};

exports.env = function(req, res) {
    var content = 'Version: ' + process.version + '\n<br/>\n' +
                  'Env: {<br/>\n<pre>';
    //  Add env entries.
    for (var k in process.env) {
       content += '   ' + k + ': ' + process.env[k] + '\n';
    }
    content += '}\n</pre><br/>\n';
    //res.send(content);
    res.send('<html>\n' +
             '  <head><title>Node.js Process Env</title></head>\n' +
             '  <body>\n<br/>\n' + content + '</body>\n</html>');
};


