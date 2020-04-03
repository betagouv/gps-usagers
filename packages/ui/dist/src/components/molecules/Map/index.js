"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Autosuggest = require("react-autosuggest");
var react_leaflet_1 = require("react-leaflet");
var styled_components_1 = require("styled-components");
var StyledMap = styled_components_1.default(react_leaflet_1.Map)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 100%;\n  height: 50rem;\n"], ["\n  max-width: 100%;\n  height: 50rem;\n"])));
var MapComponent = /** @class */ (function (_super) {
    __extends(MapComponent, _super);
    function MapComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: "",
            suggestions: [],
            geoData: null
        };
        _this.mapRef = React.createRef();
        _this.geoRef = React.createRef();
        _this.componentDidMount = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // const header = new Headers({
                    //   "Access-Control-Allow-Origin": "*",
                    //   "Content-Type": "application/json"
                    // });
                    return [4 /*yield*/, fetch("http://localhost:5000/clic")
                            .then(function (response) { return response.json(); })
                            .then(function (response) {
                            _this.setState({
                                geoData: response.features
                            });
                        })
                            .catch(function (error) { return console.log(error); })];
                    case 1:
                        // const header = new Headers({
                        //   "Access-Control-Allow-Origin": "*",
                        //   "Content-Type": "application/json"
                        // });
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onChange = function (event, _a) {
            var newValue = _a.newValue;
            _this.setState({
                value: newValue
            });
        };
        _this.onSuggestionsFetchRequested = function (_a) {
            var value = _a.value;
            fetch("https://api-adresse.data.gouv.fr/search/?q=" + value + "&limit=10")
                .then(function (response) { return response.json(); })
                .then(function (data) { return _this.setState({ suggestions: data.features }); });
        };
        _this.onSuggestionsClearRequested = function () {
            _this.setState({
                suggestions: []
            });
        };
        _this.onClick = function (suggestion) {
            var _a = suggestion.geometry.coordinates, longitude = _a[0], latitude = _a[1];
            var node = _this.mapRef.current;
            if (node) {
                node.leafletElement.setView([latitude, longitude], 13);
            }
            return suggestion.properties.label;
        };
        _this.highlightFeature = function (e) { return ({}); };
        _this.resetHighlight = function (e) {
            var node = _this.geoRef.current;
            node.leafletElement.resetStyle(e.target);
            // this.setState(() => ({ circoName: null, value: "" }));
        };
        _this.onClickMarker = function (e) {
            // const { showModal } = this.props;
            // showModal(ClicModal, {
            //   clic: e.sourceTarget.feature.properties
            // });
        };
        _this.onEachFeature = function (feature, layer) {
            layer.on({
                mouseover: _this.highlightFeature,
                mouseout: _this.resetHighlight,
                click: _this.onClickMarker
            });
        };
        return _this;
    }
    MapComponent.prototype.render = function () {
        var _a = this.state, value = _a.value, suggestions = _a.suggestions, geoData = _a.geoData;
        var inputProps = {
            placeholder: "Veuillez renseigner votre adresse",
            value: value,
            onChange: this.onChange
        };
        return (React.createElement(React.Fragment, null,
            React.createElement(Autosuggest, { suggestions: suggestions, onSuggestionsFetchRequested: this.onSuggestionsFetchRequested, onSuggestionsClearRequested: this.onSuggestionsClearRequested, getSuggestionValue: this.onClick, renderSuggestion: function (suggestion) { return (React.createElement("span", null, suggestion.properties.label)); }, inputProps: inputProps }),
            React.createElement(StyledMap, { ref: this.mapRef, center: [49.183333, -0.35], zoom: 9 },
                React.createElement(react_leaflet_1.TileLayer, { url: "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png", attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>' }),
                geoData && (React.createElement(react_leaflet_1.GeoJSON, { ref: this.geoRef, key: Math.random()
                        .toString(36)
                        .substr(2, 9), data: geoData, onEachFeature: this.onEachFeature })))));
    };
    return MapComponent;
}(React.Component));
exports.MapComponent = MapComponent;
var templateObject_1;
//# sourceMappingURL=index.js.map