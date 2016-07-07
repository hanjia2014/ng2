import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';

interface CustomerName {
    first: string;
    last: string;
}

export class Customer {
    id: string;
    name: CustomerName;
    email: string;

    static create(data) {
        return new Customer(data);
    }

    constructor(data) {
        this.id = data._id;
        this.email = data.email;
        this.name = data.name;
    }
}


@Injectable()
export class CustomerData {
    constructor(private http: Http) {
        this.customers = http.get('http://beta.json-generator.com/api/json/get/VkCoTefEg')
            .map(res => res.json())
            .map(rawCustomers => rawCustomers.map(Customer.create));
    }
}