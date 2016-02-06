(function(module) {

  function Project (obj) {
    this.title = obj.title;
    this.category = obj.category;
    this.url = obj.url;
    this.developedOn = obj.developedOn;
    this.image = obj.image;
    this.body = obj.body;
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    var appTemplate = $('#project-template').html();
    var compiledTemplate = Handlebars.compile(appTemplate);
    this.daysAgo = parseInt((new Date() - new Date(this.developedOn))/60/60/24/1000);
    this.developStatus = this.developedOn ? + this.daysAgo + ' days ago' : '(draft)';
    var compiledHtml = compiledTemplate(this);
    return compiledHtml;
  };

  Project.loadAll = function(projectData) {
    projectData.sort(function(a,b) {
      return (new Date(b.developedOn)) - (new Date(a.developedOn));
    });

    Project.all = projectData.map(function(ele) {
      return new Project(ele);
    });
  };

  var eTagRemote = '';
  Project.getEtag = function() {
    $.ajax({
      type: 'HEAD',
      url: 'data/projects.json',
      success: function(data, message, xhr) {
        eTagRemote = xhr.getResponseHeader('ETag');
      }
    }).done(Project.fetchAll);
  };

  Project.fetchAll = function() {
    if (localStorage.projectData && (localStorage.eTagLocal === eTagRemote)) {
      Project.loadAll(JSON.parse(localStorage.projectData));
      projectView.initIndexPage();
      console.log('data from local');
    } else {
      $.getJSON('data/projects.json')
      .done(function(data, message, xhr) {
        localStorage.setItem('projectData', JSON.stringify(data));
        localStorage.setItem('eTagLocal', xhr.getResponseHeader('ETag'));
        Project.loadAll(data);
        projectView.initIndexPage();
      });
    }
  };

  module.Project = Project;
})(window);
