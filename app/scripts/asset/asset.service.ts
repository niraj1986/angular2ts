import {Http, Response} from 'angular2/http';
import {ASSETS} from './mock.asset.tasks';
import {Injectable} from 'angular2/core';
//import {Observable}     from 'rxjs/Observable';
@Injectable()
export class AssetService {
  
  //private _assetServicesUrl = 'app/scripts/asset/mock.asset.tasks';
  
  //constructor (private http: Http) {}
  
  getAssetServices() {
   // console.log("Yay !!! Some function called me :) " , Promise.resolve(WORKFLOWS));
    return Promise.resolve(ASSETS);
    /*console.log("Yay !! I got it done through http")
    return this.http.get(this._workflowServicesUrl)
                    .map(res => <Workflow[]> res.json().data)
                    .catch(this.handleError);*/
  };
}