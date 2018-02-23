import { Injectable } from '@angular/core';

@Injectable()
export class DatashareService {
data:any;
  constructor() { }
setContactData(obj:any) {
	this.data = obj;
}
getContactData() {
return this.data;
}
}
