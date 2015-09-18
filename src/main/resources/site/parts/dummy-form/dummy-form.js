var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function

// Handle the GET request
exports.get = function(req) {


    // Specify the view file to use
    var view = resolve('dummy-form.html');

    var model = {};

    // Render HTML from the view file
    var body = thymeleaf.render(view, model);

    // Return the response object
    return {
        body: body
    }
};