export type Movement = {
    company: string;
    reason: string;
    origin_farm_id: string;
    originFarm: Farm;
    dest_farm_id: string;
    destFarm: Farm;
    species: string;
    itemsMoved: number;
    movementDate: Date;
}

export type Farm = {
    id: string;
    address: string;
    city: string;
    name: string;
    postalCode: number;
    state: string;
    latitude: number;
    longitude: number;
    totalAnimal: number;
}