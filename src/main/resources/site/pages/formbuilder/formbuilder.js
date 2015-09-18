var portal = require('/lib/xp/portal'); // Import the portal functions
var thymeleaf = require('/lib/xp/thymeleaf'); // Import the Thymeleaf rendering function
var UTIL = require('/lib/enonic/util/util');

// Handle the GET request
exports.get = function(req) {

    // Get the content that is using the page
    var content = portal.getContent();

    // Extract the main region which contains component parts
    var fbRegion = content.page.regions.formbuilder;

    // Specify the view file to use
    var view = resolve('formbuilder.html');


    var action  = portal.serviceUrl({
        service: 'form-builder'
    });

    var component = portal.getComponent();
    var title = portal.config ? portal.config.title : 'defaultform';

    UTIL.log(component);


    var model = {
        formtitle: title,
        fbRegion: fbRegion,
        action: action
    };

    // Render HTML from the view file
    var body = thymeleaf.render(view, model);

    // Return the response object
    return {
        body: body
    }
};