import fetch from 'jest-fetch-mock';

import { getBusinessInfo } from '~data/getBusinessInfo';

import { Business } from '~interfaces/business.decl';

const EXPECTED_RESPONSE = {
    id: 153620868,
    date_creation: '2017-10-26',
    prenom_usuel: 'ALI',
    nom: 'RAMI',
    nom_usage: null,
    etablissement_siege: {
        siren: '833079619',
        siret: '83307961900015',
        geo_adresse: '10 Rue Gabriel Péri 92120 Montrouge',
    },
};

describe('getBusinessInfo', () => {
    beforeEach(() => {
        fetch.resetMocks();
        fetch.dontMock();
    });

    it('should get the proper response', async () => {
        const {
            etablissement_siege: establishment,
            ...business
        } = (await getBusinessInfo()) as Business;
        const {
            etablissement_siege: expectedEstablishment,
            ...expectedBusiness
        } = EXPECTED_RESPONSE;
        // expect(business).toEqual(expect.objectContaining(RESPONSE));
        expect(business).toEqual(expect.objectContaining(expectedBusiness));
        expect(establishment).toEqual(expect.objectContaining(expectedEstablishment));
    });

    it('should return null on error', async () => {
        fetch.mockRejectOnce(() => Promise.reject(''));
        const business = await getBusinessInfo();
        expect(business).toBeNull();
    });
});
