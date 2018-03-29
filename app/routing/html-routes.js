module.exports = function (app) {

  // html get requests
  app.get('/', function (req, res) {
    res.render('projects', {
      title: 'Portfolio'
    })
  });


  app.get('/projects', function (req, res) {
    res.render('projects', {
      title: 'Projects',
      active_projects: true
    })
  });

  app.get('/experience', function (req, res) {
    res.render('resume', {
      title: 'Experience',
      active_about: true
    })
  });

  app.get('/contact', function (req, res) {
    res.render('contact', {
      title: 'Contact',
      active_contact: true
    })
  });

  // 404 page
  app.use(function (req, res) {
    res.render('404', {
      title: 'Page Not Found'
    })
  });


} // end module.exports()