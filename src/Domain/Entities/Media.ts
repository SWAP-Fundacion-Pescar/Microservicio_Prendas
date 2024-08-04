import IMedia from "../Interfaces/IMedia";

class Media implements IMedia
{
    url: string;
    type: string;
    constructor(url: string, type: string)
    {
        this.url = url;
        this.type = type;
    }
}
export default Media;