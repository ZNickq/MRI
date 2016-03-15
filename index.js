var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({
	defaultLayout: 'main',
	helpers: {
		whichPartial: function(name, data) {
			return name;
		}
	}
}));

app.set('view engine', 'handlebars');

app.use("/assets", express.static(__dirname + '/assets'));
app.use("/images", express.static(__dirname + '/images'));


//Handlebars.registerPartial('banner', '')

app.get('/', function (req, res) {
    res.render('home', {"web_elements":[{"type":"banner", "company":"FBI"},{"type": "major_key", "text":"Is good company.", "subtext":"Pls give us money"},{"type": "major_key", "text":"Is good company.", "subtext":"Pls give us money"},{"type": "major_key", "text":"Is good company.", "subtext":"Pls give us money"},{"type": "major_key", "text":"Is good company.", "subtext":"Pls give us money"}]});
});



app.listen(3000);
/*
exphbs.registerHelper('whichppartial', function(name, data) {
        //var partial = Handlebars.partials[name];
        //var template = Handlebars.compile(partial);
        //var output = template({"data": data});
        return new Handlebars.SafeString("banner");
    })*/