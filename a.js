function roundFloat(str, decimalNum) {
    var sourceValue=document.getElementById(str).value;
    if (isNaN(sourceValue)) {
        alert("sourceValue非法字符");
        document.getElementById(str).value="";
        return sourceValue;
    }
    var multiplyValue=Math.pow(10,parseInt(decimalNum));
    document.getElementById(str).value=(Math.round(multiplyValue*sourceValue))/multiplyValue;
    return (Math.round(multiplyValue*sourceValue))/multiplyValue;
}
exports.roundFloat = roundFloat;
