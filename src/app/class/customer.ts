import { CustomerAddress } from "./customer-address";

export class Customer {

    constructor(
        public customerid: number,
        public customername: string,
        public customermobilenumber: string,
        public customeremail: string,
        public password: string,
        public cob: CustomerAddress

    ) {

    }
}
