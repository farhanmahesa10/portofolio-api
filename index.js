const express = require('express');
const bp = require('body-parser')
const multer = require('multer')
const app = express();
const port = 4000;
const router = express.Router();
const helloRoute = require('./src/routes/hello-route');
const experienceRoute = require('./src/routes/experience-route');
const workskillRoute = require('./src/routes/workskill-route');
const projectRoute = require('./src/routes/project-route');
const educationRoute = require('./src/routes/education-route');
const organizationRoute = require('./src/routes/organization-route');
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + '-' + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}
app.use(multer({ storage: storage, fileFilter }).single('image'))

app.use('/public', express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', "*");
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
})


app.use('/api/hello', helloRoute)
app.use('/api/experience', experienceRoute);
app.use('/api/workskill', workskillRoute);
app.use('/api/project', projectRoute);
app.use('/api/education', educationRoute);
app.use('/api/organization', organizationRoute);



router.get('/', (req, res) => {

  res.send('oke')
})


router.use((req, res) => {

  res.status(404);
  res.send("<h1>404</h1")
})



app.use('/', router);

app.listen(port);