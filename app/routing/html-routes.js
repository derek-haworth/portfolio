var express = require('express');
var router = express.Router();
  
// Require json to project details
var data = require('../../data.json');
var homeProjects = data.homeProjects;
var projects = data.projects;

  // Root defaults to Projects/Portfolio Page
  router.get('/', function (req, res) {

    var handleObj = {
      title: 'Home',
      projects: homeProjects
    }
    res.render('index', handleObj)
  });
  
  // Main/Projects/Portfolio Page
  router.get('/projects', function (req, res) {
    //pull in data from data.json about project and render in the handlebar Obj
    
    var handleObj = {
      title: 'Projects',
      active_projects: true,
      projects: projects
    };

    res.render('all-projects', handleObj);
  });

  // About Page
  router.get('/about', function (req, res) {
    var handleObj = {
      title: 'About',
      active_about: true
    };
    res.render('about', handleObj);
  });
  
  // Contact Page
  router.get('/contact', function (req, res) {
    console.log("contact page");
    var handleObj = {
      title: 'Contact',
      active_contact: true
    };
    res.render('contact', handleObj);
  });

  router.get("/projects/:name", function(req, res) {
    console.log(req.params.name);

    for (var i = 0; i < projects.length; i++) {
      if (projects[i].title === req.params.name) {
        var handleObj = {
          title: projects[i].title,
          projects: projects[i]
        };
        return res.render('single-project', handleObj);
      }
    }

  });

  // 404 Page
  router.use(function (req, res) {
    var handleObj = {
      title: 'Page Not Found'
    };
    res.render('404', handleObj);
  });

module.exports = router;
