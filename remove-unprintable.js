module.exports = function(str) {
    var array = [];
    for(var i = 0; i < str.length; ++i) {
        var charCode = str.charCodeAt(i);
        if (charCode === 9 || (charCode >= 32 && charCode !== 65279)) {
            array.push(charCode);
        }
    }
    return String.fromCharCode.apply(String, array);
}