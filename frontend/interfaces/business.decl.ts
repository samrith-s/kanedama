export interface Business {
    id: number;
    date_creation: string;
    prenom_usuel: string;
    nom: string;
    nom_usage: string | null;
    etablissement_siege: {
        siren: string;
        siret: string;
        geo_adresse: string;
    };
}
