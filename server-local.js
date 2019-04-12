'use strict';

const app = require('./express/server');
console.log('entres');
console.log(app);
app.listen(3000, () => console.log('Local app listening on port 3000!'));
