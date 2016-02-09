System.register(['./mock.asset.tasks', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_asset_tasks_1, core_1;
    var AssetService;
    return {
        setters:[
            function (mock_asset_tasks_1_1) {
                mock_asset_tasks_1 = mock_asset_tasks_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {Observable}     from 'rxjs/Observable';
            AssetService = (function () {
                function AssetService() {
                }
                //private _assetServicesUrl = 'app/scripts/asset/mock.asset.tasks';
                //constructor (private http: Http) {}
                AssetService.prototype.getAssetServices = function () {
                    // console.log("Yay !!! Some function called me :) " , Promise.resolve(WORKFLOWS));
                    return Promise.resolve(mock_asset_tasks_1.ASSETS);
                    /*console.log("Yay !! I got it done through http")
                    return this.http.get(this._workflowServicesUrl)
                                    .map(res => <Workflow[]> res.json().data)
                                    .catch(this.handleError);*/
                };
                ;
                AssetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AssetService);
                return AssetService;
            })();
            exports_1("AssetService", AssetService);
        }
    }
});
//# sourceMappingURL=asset.service.js.map