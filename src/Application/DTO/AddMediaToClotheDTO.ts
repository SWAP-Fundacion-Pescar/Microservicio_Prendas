import IAddMediaToClotheDTO from "../Interfaces/IAddMediaToClotheDTO";

class AddMediaToClotheDTO implements IAddMediaToClotheDTO
{
    clotheId: string;
    media: File;
    constructor(clotheId: string, media: File)
    {
        this.clotheId = clotheId;
        this.media = media;
    }
}
export default AddMediaToClotheDTO;