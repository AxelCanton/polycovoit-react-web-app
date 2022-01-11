import { FrenchGender, Gender } from "./enum/gender.enum";

export const retrieveFrenchGender = (gender: Gender) => {
    switch (gender) {
        case Gender.Male:
            return FrenchGender.Male;
        case Gender.Female:
            return FrenchGender.Female;
        case Gender.Other:
            return FrenchGender.Other;
    }
}