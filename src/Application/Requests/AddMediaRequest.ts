class AddMediaRequest
{
    userId: string;
    clotheId: string;
    mediaUrl: string;
    constructor(userId:string ,clotheId: string, mediaUrl: string)
    {
        this.userId = userId;
        this.clotheId = clotheId;
        this.mediaUrl = mediaUrl;
    }
}
export default AddMediaRequest;