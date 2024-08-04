import IReview from "../Interfaces/IReview";

class Review implements IReview
{
    senderUserId: string;
    receiverUserId: string;
    puntuation: number;
    comment: string;
    constructor(senderUserId: string, receiverUserId: string, puntuation: number, comment: string)
    {
        this.senderUserId = senderUserId;
        this.receiverUserId = receiverUserId;
        this.puntuation = puntuation;
        this.comment = comment;
    }
}
export default Review;