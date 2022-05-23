import { ShippingDetailsObject } from "../../types/shippingInformation";

/**
 * Create the content of pdf
 * return the HTML content
 * @param shippingInfo
 * @returns HTML
 */
export const content = (shippingInfo: ShippingDetailsObject) => {

    const emptyObjectAdess = {
        name: "", city: "", country_code: "",
        postal_code: "", street1: "" , province: ""
    };

    if (!shippingInfo){
        return `<h1> Not content found </h4>`;
    }

    if (!shippingInfo.hasOwnProperty('address_from')){
        shippingInfo.address_from = emptyObjectAdess;
    }

    if (!shippingInfo.hasOwnProperty('address_to')){
        shippingInfo.address_from = emptyObjectAdess;
    }

    if (!shippingInfo.hasOwnProperty('parcels')){
        shippingInfo.parcels = [];
    }

    const { address_from, address_to, parcels } = shippingInfo;

    let tablecontent = "";


    if (parcels && Array.isArray(parcels) && parcels.length > 0){
        parcels.forEach((parcel) => {
            tablecontent += `
            <tr>
                <td>${parcel?.weight || 0} ${parcel?.weight_unit || ""}</td>
                <td>${parcel?.length || 0}</td>
                <td>${parcel?.height || 0}</td>
            </tr>
            `
        });
    }

    return `
        <!doctype html>
            <html>
            <head>
                    <meta charset="utf-8">
                    <title>Label</title>
                    <style>
                        h1 {
                            color: #04AA6D;
                        }

                        table {
                            border-collapse: collapse;
                            width: 100%;
                          }

                          th, td {
                            text-align: left;
                            padding: 8px;
                          }

                          tr:nth-child(even){background-color: #f2f2f2}

                          th {
                            background-color: #04AA6D;
                            color: white;
                          }
                    </style>
                </head>
                <body>
                    <div id="pageHeader" style="border-bottom: 1px solid #ddd; padding-bottom: 1px;">
                        <p>SkyDrops</p>
                    </div>
                    <h1>${address_from?.name || ""}</h4>
                    <h4>${address_from?.city || ""}</h4>
                    <h4>${address_from?.country_code || ""}</h4>
                    <h4>${address_from?.postal_code || ""}</h4>
                    <h4>${address_from?.street1 || ""}</h4>
                    <h1>--------------------------------------</h1>
                    <h1>${address_to?.name || ""}</h1>
                    <h4>${address_to?.city || ""}</h4>
                    <h4>${address_to?.country_code || ""}</h4>
                    <h4>${address_to?.province || ""}</h4>
                    <h4>${address_to?.street1 || ""}</h4>
                    <h1>--------------------------------------</h1>
                    <h2>Parcels</h2>
                    <table>
                        <tr>
                            <th>Weight</th>
                            <th>Length</th>
                            <th>height</th>
                        </tr>
                        ${tablecontent}
                    </table>
                    <div id="pageFooter" style="border-top: 1px solid #ddd; padding-top: 5px;">
                        <p style="color: #666; width: 70%; margin: 0; padding-bottom: 5px; text-align: let; font-family: sans-serif; font-size: .65em; float: left;"><p>Label SkyDrops</p>
                        <p style="color: #666; margin: 0; padding-bottom: 5px; text-align: right; font-family: sans-serif; font-size: .65em">Página {{page}} de {{pages}}</p>
                    </div>
                </body>
            </html>
`
};