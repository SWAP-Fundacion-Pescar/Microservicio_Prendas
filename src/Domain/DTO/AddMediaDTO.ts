import Media from "../Entities/Media";

class AddMediaDTO
{
    clotheId: string;
    media: Media;
    constructor(clotheId: string, media: Media)
    {
        this.clotheId = clotheId;
        this.media = media;
    }
}
export default AddMediaDTO;