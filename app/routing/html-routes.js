var express = require('express');
var router = express.Router();
  
// Require json to project details
var data = require('../../data.json');
// var homeProjects = data.homeProjects;
var projects = data.projects;

  // Root defaults to Index/Landing Page
  router.get('/', function (req, res) {

    var handleObj = {
      title: 'Home',
      content: 'A Chicago-based front-end developer specializing in solutioning complex business problems. A self driven individual who is passionate about creative problem solving.'
    }
    res.render('index', handleObj)
  });
  
  // Main-Projects/Portfolio Page
  router.get('/projects', function (req, res) {
    //pull in data from data.json about project and render in the handlebar Obj
    
    var handleObj = {
      title: 'Projects & Apps',
      content: 'A collection of projects, employer based apps, experiments, and games.',
      active_projects: true,
      projects: projects
    };

    res.render('all-projects', handleObj);
  });

  // About Page
  router.get('/about', function (req, res) {
    var handleObj = {
      title: 'About',
      content: 'Derek has 4 years of professional development experience. Contact Derek today for all of your front-end or full stack needs.',
      active_about: true
    };
    res.render('about', handleObj);
  });
  
  // Contact Page
  router.get('/contact', function (req, res) {
    var handleObj = {
      title: 'Contact',
      content: 'Looking to find a front-end developer? Want to hire me? Lets connect! Derek Haworth is located in Chicago, IL.',
      active_contact: true
    };
    res.render('contact', handleObj);
  });

  // Resume Page
  router.get('/resume', function (req, res) {
    var handleObj = {
      title: 'Resume',
      content: 'A Chicago-based front-end developer specializing in solutioning complex business problems. A self driven individual who is passionate about creative problem solving.',
      active_resume: true
    };
    res.render('resume', handleObj);
  });

  router.get("/projects/:name", function(req, res) {
    // console.log(req.params.name);

    for (var i = 0; i < projects.length; i++) {
      if (projects[i].title === req.params.name) {

        var handleObj = {
          title: projects[i].title,
          content: projects[i].longDesc,
          demo: projects[i].demo,
          github: projects[i].github,
          image: projects[i].image
        };

        return res.render('single-project', handleObj);
      }
    }
  });

  // 404 Page
  router.use(function (req, res) {
    var handleObj = {
      title: 'Page Not Found',
      content: ''
    };
    res.render('404', handleObj);
  });

module.exports = router;
