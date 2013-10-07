var allowedUrls = [
        'contacts', 'index', 'partners', 'franchising'
    ];

exports.index = function(req, res){
    var url = decodeURI(req.url).replace('/', '').replace('.html', '').toLowerCase() || 'index';

    if (allowedUrls.indexOf(url) == -1) {
        res.render(404, '404');
        return;
    }

    res.render(url, { activePage: url });
};