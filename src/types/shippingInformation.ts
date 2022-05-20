export interface ShippingInformationType {
    carrier: string;
    shipment: ShippingDetailsObject;
}

export interface ShippingDetailsObject {
    address_from: AddressI;
    address_to: AddressI;
    parcels: ParcelsI[];
}

export interface AddressI {
    name: string;
    street1: string;
    city: string;
    province: string;
    postal_code: string;
    country_code: string;
}

export interface ParcelsI {
    length: number;
    width: number;
    height: number;
    dimensions_unit: string;
    weight: number;
    weight_unit: string;
}



