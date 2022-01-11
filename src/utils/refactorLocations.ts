import { ILocation, ILocationRefactored } from "../interfaces/location.interface";


export const refactorLocations = (locations: ILocation[]): ILocationRefactored[] => {
    const result: ILocationRefactored[] = [];
    locations.forEach((location) => {
        const condition = (loc: ILocationRefactored) => loc.postalCode === location.postalCode;
        const alreadyRefactoredLoc = result.find(condition);
        if (alreadyRefactoredLoc) {
            const indexResult = result.findIndex(condition);
            result[indexResult].locations.push(location);
        } else {
            const refactoredLoc: ILocationRefactored = {
                city: location.city,
                postalCode: location.postalCode,
                locations: [location]
            };
            result.push(refactoredLoc);
        }
    })
    return result;
};