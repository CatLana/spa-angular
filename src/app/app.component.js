"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var form_data_service_1 = require("./form-data.service");
var AppComponent = (function () {
    function AppComponent(formDataService) {
        this.formDataService = formDataService;
    }
    // This method retrieves data from the server by mean of form-data.service. 
    // Form data service returns a promise with a form data object
    AppComponent.prototype.getFormData = function () {
        var _this = this;
        this.formDataService.getFormData().then(function (dataRetrieved) {
            _this.formData = dataRetrieved;
        });
    };
    // When the application starts we would like to execute the following
    AppComponent.prototype.ngOnInit = function () {
        this.getFormData();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './partials/app.html',
        providers: [form_data_service_1.FormDataService]
    }),
    __metadata("design:paramtypes", [form_data_service_1.FormDataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map