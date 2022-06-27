let express = require('express');
let app = express();

app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
	res.sendFile('./index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
	res.sendFile('./about.html', { root: __dirname });
});
app.get('/contacts', (req, res) => {
	res.sendFile('./contact-me.html', { root: __dirname });
});
