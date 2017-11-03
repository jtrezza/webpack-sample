import template from '../hbs/my-div.hbs';

(function(template){
  var templateHTML = template({name: 'Koombea'});
  document.write(templateHTML);
}(template));
