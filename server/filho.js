const express = require('express')
const path = require('path')
const app = express()
const chalk = require('chalk')
const log = console.log

const port = process.env.PORT || 1002
const environment = process.env.NODE_ENV || 'development'

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../views/filho.html'));
});

app.listen(port, function(err){
	if(err) return console.log(err);
	log(chalk.white.bgBlue.bold(`node listening on port ${port} in ${environment} mode`));
})