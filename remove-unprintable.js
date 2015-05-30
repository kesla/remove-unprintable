module.exports = function(str) {
  if (!hasUnprintable(str)) {
    return str;
  }

  var array = [];
  for(var i = 0; i < str.length; ++i) {
    var charCode = str.charCodeAt(i);
    if (!isUnprintable(charCode)) {
      array.push(charCode);
    }
  }
  return String.fromCharCode.apply(String, array);
}

function hasUnprintable (str) {
  for(var i = 0; i < str.length; ++i) {
    var charCode = str.charCodeAt(i);
    if (isUnprintable(charCode)) {
      return true;
    }
  }
  return false;
}

function isUnprintable (charCode) {
  return charCode !== 9 && (charCode < 32 || charCode === 65279);
}
