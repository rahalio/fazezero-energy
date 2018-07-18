import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

import { DataService } from '../data.service';
import { Energy } from '../network.energy.fazezero';


// Can be injected into a constructor
@Injectable()
export class EnergyService {

    //define namespace for energy calls
		private NAMESPACE: string = 'Energy';

    //use data.service.ts to create services to make API calls
    constructor(private dataService: DataService<Energy>) {
    };

    //get all energy asset objects on the blockchain network
    public getAll(): Observable<Energy[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    //get energy asset by id
    public getAsset(id: any): Observable<Energy> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    //add energy asset
    public addAsset(itemToAdd: any): Observable<Energy> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

}
