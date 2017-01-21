
var template = "<ul> {{#name}} <li> {{elm}} </li> {{/name}} </ul>";

var data = {name: [
    {"elm":'One'}, 
    {"elm":'Two'}, 
    {"elm":'Three'}
    ]};
var result = Mustache.render(template, data);

document.getElementById('list').innerHTML = result;



// function loadtemp(){
//     var result = Mustache.render(template, data);
        
//         document.getElementById('list').innerHTML = result;
//       }


// template = "{{#repo}}  <b>{{name}}</b>  {{/repo}}";
// data = { "repo": [
//  { "name": "resque" },
//  { "name": "hub" },
//  { "name": "rip" }
//  ]}




