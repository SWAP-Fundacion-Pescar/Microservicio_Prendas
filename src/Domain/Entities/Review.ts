import IReview from "../Interfaces/IReview";

class Review implements IReview
{
    senderUserId: String;
    receiverUserId: String;
    puntuation: Number;
    comment: String;
    constructor(senderUserId: string, receiverUserId: string, puntuation: number, comment: string)
    {
        this.senderUserId = senderUserId;
        this.receiverUserId = receiverUserId;
        this.puntuation = puntuation;
        this.comment = comment;
    }
}
export default Review;