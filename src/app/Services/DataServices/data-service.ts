import { Service } from '@angular/core';

@Service()
export class DataService {

    getData()
    {
        return ["Old Monk","Glenfidich","Smirnoff","Jack Daniel"];
    }
   
}
