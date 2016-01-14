var projects = [];

function Project (obj) {
  this.title = obj.title;
  this.url = obj.url;
  this.developedOn = obj.developedOn;
  this.image = obj.image;
  this.body = obj.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('div.template').clone();
  $newProject.find('a').attr({href: this.url, target: '_blank'});
  $newProject.find('img').attr({src: this.image, width: '400'});
  $newProject.find('a.title').html(this.title);
  $newProject.find('p.proj-descript').html(this.body);
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
