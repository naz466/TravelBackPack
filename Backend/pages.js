exports.mainPage = function(req, res) {
    res.render('mainPage', {
        pageTitle: 'BackPack',
        mainActive: true,
        mapActive: false
    });
};

exports.mapPage = function(req, res) {
    res.render('map', {
        pageTitle: 'Map',
        mainActive: false,
        mapActive: true
    })
};