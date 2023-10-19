const admin = require('firebase-admin');

const firebaseConfig = {
  credential: admin.credential.cert('./config/firebaseServiceCred.json'),
  storageBucket: 'bookalley-b6495.appspot.com'
};

admin.initializeApp(firebaseConfig);
const bucket = admin.storage().bucket();

module.exports = {
  bucket
};