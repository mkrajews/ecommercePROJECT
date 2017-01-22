const app = require('./index.js');
// const db = app.get('db');
// const config = require('./config.js')

const constring = 'postgres://abmfdxmt:EujkUYAgdhfidxI8mLNX6sRIKUl-l5fE@elmer.db.elephantsql.com:5432/abmfdxmt';

const massiveInstance = massive.connectSync({
  connectionString: constring
});

app.set('db', massiveInstance);
const db = app.get('db');
