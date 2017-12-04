export class specie {
    constructor(name, profilePicturUrl, maxAge, origin, originPictUrl, description, pictList, amount, enclosure) {
        // Name of the species - String
        this._specieName = name;

        // Url of the profile picture for a specific specie - String
        this._specieProfilePicturUrl = profilePicturUrl;

        // maxAge for a specific specie - Int
        this._specieMaxAge = maxAge;

        // Origin Area for a specific specie - String
        this._specieOrigin = origin;

        // Origin Pict for a specific specie, usualy a map - string
        this._specieOriginPictUrl = originPictUrl;

        // Description for a specific specie
        this._specieDescription = description;

        // List of all pictures available for a specific specie, with there URL - string
        this._speciePictList = pictList;

        // Amount of animals of a specific specie into the Zoo - Int
        this._specieAmount = amount;

        // Name of the enclosures for this specie into a zoo - Array
        this._specieEnclosure = enclosure;
    }

    // Handle NAMES
    getSpecieName() {
        return this._specieName;
    }
    setSpecieName(newSpecieName) {
        this._specieName = newSpecieName;
    }

    // Handle PROFILE PICTURE URL
    getSpecieProfilePicturUrl() {
        return this._specieProfilePicturUrl
    }
    setSpecieProfilePicturUrl(newSpecieProfilePictureUrl) {
        this._specieProfilePicturUrl = newSpecieProfilePictureUrl;
    }

    // Handle MAXAGE
    getSpecieMaxAge() {
        return this._specieMaxAge
    }
    setSpecieMaxAge(newSpecieMaxAge) {
        this._specieMaxAge = newSpecieMaxAge;
    }

    // Handle ORIGIN
    getSpecieOrigin() {
        return this._specieOrigin
    }
    setSpecieOrigin(newSpecieOrigin) {
        this._specieOrigin = newSpecieOrigin;
    }

    // Handle ORIGINPICTURL
    getSpecieOriginPictUrl() {
        return this._specieOriginPictUrl
    }
    setSpecieOriginPictUrl(newSpecieOriginPictUrl) {
        this._specieOriginPictUrl = newSpecieOriginPictUrl;
    }

    // Handle PICTLIST
    getSpeciePictList() {
        return this._speciePictList
    }
    setSpeciePictList(newSpeciePictList) {
        this._speciePictList = newSpeciePictList;
    }

    // Handle DESCRIPTION
    getSpecieDescription() {
        return this._specieDescription
    }
    setSpecieDescription(newSpecieDescription) {
        this._specieDescription = newSpecieDescription;
    }

    // Handle AMOUNT
    getSpecieAmount() {
        return this._specieAmount
    }
    setSpecieAmount(newSpecieAmount) {
        this._specieAmount = newSpecieAmount;
    }

    // Handle ENCLOSURE
    getSpecieEnclosure() {
        return this._specieEnclosure
    }
    setSpecieEnclosure(newSpecieEnclosure) {
        this._specieEnclosure = newSpecieEnclosure;
    }
};

export default specie;
