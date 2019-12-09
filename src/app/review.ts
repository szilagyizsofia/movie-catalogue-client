export class Review {
    review: string;
    id: number;
    version: number;

    constructor(review, id, version){
        this.review = review;
        this.id = id;
        this.version = version;
    }
}
