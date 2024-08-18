class AddMediaRequest
{
    userId: string;
    clotheId: string;
    media: Express.Multer.File;
    constructor(userId:string ,clotheId: string, media: Express.Multer.File)
    {
        this.userId = userId;
        this.clotheId = clotheId;
        this.media = media;
    }
}
export default AddMediaRequest;