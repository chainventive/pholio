import { PinataErrorAPI } from "./models/errors/PinataErrorAPI";
import { AuthTestResponse } from "./models/authentication/AuthTestResponse";
import { ListFilesResponse } from "./models/pinning/listFiles/response/ListFilesResponse";
import { ListedFile } from "./models/pinning/listFiles/response/ListedFile";
import { ListFilesOptions } from "./models/pinning/listFiles/query/ListFilesOptions";

function appendEndpointUrlParameter(endpoint: string, key: string, value: any): string {
    const hasParameter = endpoint.includes('?');
    return endpoint + `${ hasParameter ? '&' : '?' }${ key }=${ value }`;
}

export class PinataClient {

    public testAuthentication = async (): Promise<boolean> => {

        const endpoint = 'https://api.pinata.cloud/data/testAuthentication';

        const requestOptions = {
            method: 'GET',
            headers: {  
                Authorization: `Bearer ${ process.env.NEXT_PUBLIC_PINATA_API_KEY_JWT }`
            }
        }

        const response = await fetch(endpoint, requestOptions);

        if (response.status != 200) {
            const data: PinataErrorAPI = await response.json();
            throw Error(`(Pinata API) ${data.error.details}; Reason: ${data.error.reason}`);
        }

        const data: AuthTestResponse = await response.json();

        return true;
    }

    public listFiles = async (options?: ListFilesOptions): Promise<ListedFile[]> => {

        let endpoint = 'https://api.pinata.cloud/data/pinList';

        const requestOptions = {
            method: 'GET',
            headers: {  
                Authorization: `Bearer ${ process.env.NEXT_PUBLIC_PINATA_API_KEY_JWT }`
            }
        }

        if (options) {

            if (options.includeCount != null)
                endpoint = appendEndpointUrlParameter(endpoint, 'includeCount', options.includeCount);
        }

        console.log(endpoint);

        const response = await fetch(endpoint, requestOptions);

        if (response.status != 200) {
            const data: PinataErrorAPI = await response.json();
            throw Error(`(Pinata API) ${data.error.details}; Reason: ${data.error.reason}`);
        }

        const data: ListFilesResponse = await response.json();

        return data.rows;
    }
}