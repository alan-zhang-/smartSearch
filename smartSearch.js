/*!
 *  version: 1.0
 *  author: Alan Zhang <alanzhang717@gmail.com>
 *  https://github.com/alan-zhang-/smartSearch
 */

var smartSearch = function(data, url) {
    var search = location.search,searchObj = {},searchArr = [],searchStr;

    if (search) {
        search = search.substr(1).split('&');

        for (var i = search.length - 1; i >= 0; i--) {
            var tmp = search[i].split('=');
            searchObj[tmp[0]] = tmp[1];
        };
    };

    for ( var prop in data ) {
        searchObj[encodeURIComponent(prop)] = encodeURIComponent(data[prop]);
    };

    for ( var prop in searchObj ) {     
        searchArr.push(prop+ '=' + searchObj[prop]);
    };

    searchStr = searchArr.join('&');

    if (arguments.length === 1) {
        var url = location.origin + location.pathname;
    };

    location.href = url + '?' + searchStr;
};