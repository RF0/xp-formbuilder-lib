var contentLib = require('/lib/xp/content');
var portal = require('/lib/xp/portal');
var UTIL = require('/lib/enonic/util/util');

/*
*   Post: 
*/
exports.post = function(req) {

    UTIL.log("test log welkjearigm aølregn ølaerjgøaliergj ");
    UTIL.log(req);

    var params = req.params;
    var site = portal.getSite();
    var formtitle = params.formtitle;


    var result = contentLib.create({
        name: formtitle+"-form-builder-post-"+Date.now(),//urlParams.title,
        draft: true,
        
        displayName: "Formbuilder post",//urlParams.title,
        contentType: app.name + ':form-builder-post',
        parentPath: site._path + '/',
        branch: 'draft',
        data: {
            'text-input': {
                name: 'middag',// params.name,
                value: 'ost'//params.name.value
            }
        }
    });
    
    var content = portal.getContent();
    return {
        redirect: portal.pageUrl({
            path: content._path
        })
    };
};