class RemoveMediaRequest
{
    userId: string;
    clotheId: string;
    mediaIndex: number;
    constructor(userId: string ,clotheId: string, mediaIndex: number)
    {
        this.userId = userId;
        this.clotheId = clotheId;
        this.mediaIndex = mediaIndex;
    }
}
export default RemoveMediaRequest;