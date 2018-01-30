var Cities;
var API = require('../API');
var Storage = require('../LocalStorage');

function getId(text) {
    var nameCity;
    var find = false;
    API.getCitiesList(function (err, data) {
        if (!err) {
            Cities = data;
            for (var i = 0; i < Cities.length; i++) {
                if (text !== undefined) {
                    text = text.toLowerCase();
                    nameCity = Cities[i].city.toLowerCase();
                    if (text == nameCity) {
                        var id = Cities[i].id;
                        Storage.set('id', id);
                        document.location.href = '/city.html'
                        find = true;
                    }
                }
            }
            if (!find) {
                $('.search-box').addClass('has-error');
            }
        }
    });
}

exports.getId = getId;