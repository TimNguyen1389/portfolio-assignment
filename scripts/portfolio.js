var projects = [];

function Project (obj) {
  this.title = obj.title;
  this.category = obj.category;
  this.url = obj.url;
  this.developedOn = obj.developedOn;
  this.image = obj.image;
  this.body = obj.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('div.template').clone();
  $newProject.attr('data-category', this.category);
  $newProject.find('a').attr({href: this.url, target: '_blank'});
  $newProject.find('img').attr({src: this.image});
  $newProject.find('a.project-title').html(this.title);
  $newProject.find('section.project-descript').html(this.body);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.developedOn))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  $newProject.removeClass('template');
  return $newProject;
};

projectData.sort(function(a,b) {
  return (new Date(b.developedOn)) - (new Date(a.developedOn));
});

projectData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(p){
  $('#projects').append(p.toHtml());
});
