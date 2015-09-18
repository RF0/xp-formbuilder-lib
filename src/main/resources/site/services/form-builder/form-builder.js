var contentLib = require('/lib/xp/content');

/*
*   Post: 
*/
exports.post = function(req) {

    //create new 'note'
    var result = contentLib.create({
        name: "form-builder-post",//urlParams.title,
        draft: true,
        
        displayName: "Formbuilder post",//urlParams.title,
        contentType: module.name + ':form-builder-post',
        parentPath: site._path + '/',
        branch: 'draft',
        data: {
            text-input: {
                label:urlParams.label,
                value:urlParams.value
            }
        }
    });
    
    var content = execute('portal.getContent');
    return {
        redirect: execute('portal.pageUrl', {
            path: content._path
        })
    };
};