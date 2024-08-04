import IRemoveMediaFromClotheDTO from "../Interfaces/IRemoveMediaFromClotheDTO";

class RemoveMediaFromClotheDTO implements IRemoveMediaFromClotheDTO
{
    clotheId: string;
    mediaIndex: number;
    constructor(clotheId: string, mediaIndex: number)
    {
        this.clotheId = clotheId;
        this.mediaIndex = mediaIndex;
    }
}
export default RemoveMediaFromClotheDTO;