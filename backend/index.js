const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios'); 
const routeimage =require('./route/imageroute')
const app = express();
const dotenv = require('dotenv');
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

app.use('/api', routeimage)
 const port = 4550;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
