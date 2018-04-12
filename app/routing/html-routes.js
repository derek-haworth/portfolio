
module.exports = function (app) {

  var data = require('../../data.json');
  var projects = data.projects;

// HTML GET Requests

  // Root defaults to Projects/Portfolio Page
  app.get('/', function (req, res) {

    var handleObj = {
      title: 'TEst',
      projects: projects
    }
    res.render('projects', handleObj)
  });
  
  // Main/Projects/Portfolio Page
  app.get('/projects', function (req, res) {
    //pull in data from data.json about project and render in the handlebar Obj
    
    var handleObj = {
      title: 'Portfolio',
      active_projects: true,
      projects: projects
    };

    res.render('projects', handleObj);
  });

  // About Page
  app.get('/about', function (req, res) {
    var handleObj = {
      title: 'About',
      active_about: true
    };
    res.render('about', handleObj);
  });
  
  // Contact Page
  app.get('/contact', function (req, res) {
    var handleObj = {
      title: 'Contact',
      active_contact: true
    };
    res.render('contact', handleObj);
  });

  // 404 Page
  app.use(function (req, res) {
    var handleObj = {
      title: 'Page Not Found'
    };
    res.render('404', handleObj);
  });


} // end module.exports()

