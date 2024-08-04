import Review from "../../Domain/Entities/Review";
import IReceivedDataToAddReview from "../Interfaces/IReceivedDataToAddReview";

class ReceivedDataToAddReview implements IReceivedDataToAddReview
{
    clotheId: string;
    review: Review;
    constructor(clotheId: string, review: Review)
    {
        this.clotheId = clotheId;
        this.review = review;
    }
}
export default ReceivedDataToAddReview;