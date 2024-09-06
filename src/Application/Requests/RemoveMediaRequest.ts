class RemoveMediaRequest
{
    userId: string;
    clotheId: string;
    mediaId: string;
    constructor(userId: string ,clotheId: string, mediaId: string)
    {
        this.userId = userId;
        this.clotheId = clotheId;
        this.mediaId = mediaId;
    }
}
export default RemoveMediaRequest;