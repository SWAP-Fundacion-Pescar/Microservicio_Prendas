class RemoveMediaRequest
{
    clotheId: string;
    mediaIndex: number;
    constructor(clotheId: string, mediaIndex: number)
    {
        this.clotheId = clotheId;
        this.mediaIndex = mediaIndex;
    }
}
export default RemoveMediaRequest;