import IMedia from "../Interfaces/IMedia";

class Media implements IMedia
{
    id?: string;
    url: string;
    type: string;
    constructor(url: string, type: string, id?: string)
    {
        this.id = id;
        this.url = url;
        this.type = type;
    }
}
export default Media;