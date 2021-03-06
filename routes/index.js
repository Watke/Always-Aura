
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Simple chat' });
};

exports.display404 = function(req, res, next) {
    res.status(404);
    if (req.accepts('html')) {
        res.render('errorPage', { error: '404', msg: 'The page you request was not found.'});
        return;
    }
    if (req.accepts('json')) {
        res.send({ error: 'Not found' });
        return;
    }
    res.type('txt').send('Not found');
}