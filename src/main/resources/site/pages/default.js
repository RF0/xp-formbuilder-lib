var UTIL = require('/site/lib/util/js/util.js');

// Handle GET request
exports.get = handleGet;

function handleGet(req) {
    var me = this;

    function renderView() {
        var view = resolve('default.html');
        var model = createModel();

        return UTIL.view.render(view, model);
    }

    function createModel() {
        me.site = execute('portal.getSite');
        me.content = execute('portal.getContent');

        var model = {};
        model.mainRegion = me.content.page.regions['main'];



        return model;
    }


    return renderView();
}
