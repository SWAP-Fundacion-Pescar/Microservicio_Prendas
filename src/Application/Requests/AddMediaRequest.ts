class AddMediaRequest
{
    clotheId: string;
    media: File;
    constructor(clotheId: string, media: File)
    {
        this.clotheId = clotheId;
        this.media = media;
    }
}
export default AddMediaRequest;