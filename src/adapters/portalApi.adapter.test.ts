// Axios
import MockAdapter from 'axios-mock-adapter';

// Adapter
import { adapterPortalApi, apiClient } from 'adapters/portalApi.adapter';


jest.mock('utils/authentication', () => {
    return {
        __esModule: true,
        getAccessToken: jest.fn(() => "TESTING_ACCESS_TOKEN")
    }
})

jest.mock('endpoints', () => {
    return {
        __esModule: true,
        endpoints: {
            PORTAL_API: "TESTING_ENDPOINT"
        }
    }
})

describe('Portal API Adapter', () => {

    let mock: InstanceType<typeof MockAdapter> = new MockAdapter(apiClient);
  

    describe('get', () => {

        it('checks authorization header', async () => {

            mock.onGet('').reply(200, {
                result: "API_RESPONSE"
            });
    
            const getResponse = await adapterPortalApi.get("");

            expect(getResponse.config.baseURL).toBe("TESTING_ENDPOINT");
            expect(getResponse.config.headers.Authorization).toBe(`Bearer ${'TESTING_ACCESS_TOKEN'}`);

        });

    });

    describe('post', () => {

        it('checks authorization header', async () => {

            mock.onPost('').reply(200, {
                result: "API_RESPONSE"
            });
    
            const postResponse = await adapterPortalApi.post("", {
                payload: {
                    id: 1
                }
            });

            expect(postResponse.config.baseURL).toBe("TESTING_ENDPOINT");
            expect(postResponse.config.headers.Authorization).toBe(`Bearer ${'TESTING_ACCESS_TOKEN'}`);

        });

    });

})