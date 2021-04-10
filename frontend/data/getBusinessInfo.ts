import { Business } from '~interfaces/business.decl';

export async function getBusinessInfo(): Promise<Business | null> {
    return await fetch('https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/833079619')
        .then((res) => res.json())
        .then((data) => data.unite_legale || null)
        .catch((error) => {
            console.error(error);
            return null;
        });
}
