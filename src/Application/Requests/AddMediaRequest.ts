class AddMediaRequest
{
    clotheId: string;
    media: Express.Multer.File;
    constructor(clotheId: string, media: Express.Multer.File)
    {
        this.clotheId = clotheId;
        this.media = media;
    }
}
export default AddMediaRequest;