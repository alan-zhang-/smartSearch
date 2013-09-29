(function(){
    function redirect (field, value) {
        var searchStr = addSearchField(field, value);
        location.href = location.origin + location.pathname  + '?' + searchStr;
    }

    function addSearchField (field, value) {
        var search = window.location.search;
        if (search) {
            var searchStr = window.location.search.substr(1);
            searchStr = searchStr.split('&');
            var searchObj = {};searchArr= [];
            for (var i = searchStr.length - 1; i >= 0; i--) {
                var tmp = searchStr[i].split('=');
                searchObj[tmp[0]] = tmp[1];
            };

            searchObj[field] = value;
            for(var prop in searchObj) {
                searchArr.push(prop + '=' + searchObj[prop]);
            }

            searchStr = searchArr.join('&');
        } else {
            searchStr = field + '=' + value;
        }

        return searchStr;
    }
})();