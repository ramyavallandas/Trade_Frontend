import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DataService {
    custodianData: any;

    constructor(private http: HttpClient) {
        this.custodianData = [];
    }

    getDataFromApi(url: string) {
        this.http.get(url).subscribe((res) => {
            this.custodianData = res;
            return this.custodianData;
        })
    }

    getCustodianData() {
        return this.custodianData;
    }
    setCustodianData(custodianData: any) {
        this.custodianData = custodianData;
    }

}