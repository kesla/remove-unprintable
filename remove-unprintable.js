module.exports = function(str) {
    var array = [];
    for(var i = 0; i < str.length; ++i) {
        var charCode = str.charCodeAt(i);
        // 9 === '\t', 10 '\n'
        if (charCode === 9 || charCode === 10 || (charCode >= 32 && charCode !== 65279)) {
            array.push(charCode);
        }
    }
    return String.fromCharCode.apply(String, array);
}