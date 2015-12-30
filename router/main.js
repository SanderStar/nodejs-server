/**
 * Created by 814431 on 30-12-2015.
 */
module.exports = function(app)
{
    app.get('/',function(req,res){
        res.render('index.html', { title : 'Index page'});
    });
    app.get('/about',function(req,res){
        res.render('about.html', { title : 'About page'});
    });
}
