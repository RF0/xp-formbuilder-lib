var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function
var UTIL = require('/lib/enonic/util/util');
// Handle the GET request
exports.get = function(req) {


    // Specify the view file to use
    var view = resolve('textline.html');

    var component = portal.getComponent();
    //UTIL.log(component);

    var config = component.config;

    var model = {
        legend: config.legend,
        label: config.label,
        name: config.name,
        type: config.type
    };

    // Render HTML from the view file
    var body = thymeleaf.render(view, model);

    // Return the response object
    return {
        body: body
    }
};