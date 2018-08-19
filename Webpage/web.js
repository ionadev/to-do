const express = require('express');
const web = express();
const { client } = require('../Bot/index');

web.get('/' , (req,res) => res.send(client));

web.listen(3000, () => console.log('Listening!'))