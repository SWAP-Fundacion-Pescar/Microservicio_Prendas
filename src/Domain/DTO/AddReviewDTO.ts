import Review from "../Entities/Review";

class AddReviewDTO
{
    clotheId: string;
    review: Review;
    constructor(clotheId: string, review: Review)
    {
        this.clotheId = clotheId;
        this.review = review;
    }
}
export default AddReviewDTO;