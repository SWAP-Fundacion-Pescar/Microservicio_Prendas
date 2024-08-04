import IReceivedDataToAddMediaToClothe from "../Interfaces/IReceivedDataToAddMediaToClothe";

class ReceivedDataToAddMediaToClotheDTO implements IReceivedDataToAddMediaToClothe
{
    clotheId: string;
    media: File;
    constructor(clotheId: string, media: File)
    {
        this.clotheId = clotheId;
        this.media = media;
    }
}
export default ReceivedDataToAddMediaToClotheDTO;