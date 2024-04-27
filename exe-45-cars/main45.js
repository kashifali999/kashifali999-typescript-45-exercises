var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, model, additionalInfo) {
    if (additionalInfo === void 0) { additionalInfo = {}; }
    var car = __assign({ manufacturer: manufacturer, model: model }, additionalInfo);
    return car;
}
var myCar = createCar("Toyota", "Camry", { color: "Blue", year: 2022 });
console.log(myCar);
