class AddReviewRequest
{
    clotheId: string;
    senderUserId: string;
    receiverUserId: string;
    puntuation: number;
    comment: string;
    constructor(clotheId: string, senderUserId: string, receiverUserId: string, puntuation: number, comment: string)
    {
        this.clotheId = clotheId;
        this.senderUserId = senderUserId;
        this.receiverUserId = receiverUserId;
        this.puntuation = puntuation;
        this.comment = comment;        
    }
}
export default AddReviewRequest;