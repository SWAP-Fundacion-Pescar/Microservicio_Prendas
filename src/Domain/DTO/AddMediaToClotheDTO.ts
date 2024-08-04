import Media from "../Entities/Media";

class AddMediaToClotheDTO
{
    clotheId: string;
    media: Media;
    constructor(clotheId: string, media: Media)
    {
        this.clotheId = clotheId;
        this.media = media;
    }
}
export default AddMediaToClotheDTO;