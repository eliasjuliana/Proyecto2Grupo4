export class Movie {
    constructor(name, image, category, description, publication) {
        this.name = name;
        this.image = image;
        this.category = category;
        this.description = description;
        this.publication = publication;
        this.code = self.crypto.randomUUID();
    }
}

export class Serie {
    constructor(name, image, category, seasons, episodes, description, publication) {
        this.name = name;
        this.image = image;
        this.category = category;
        this.seasons = seasons;
        this.episodes = episodes;
        this.description = description;
        this.publication = publication;
        this.code = self.crypto.randomUUID();
    }
}