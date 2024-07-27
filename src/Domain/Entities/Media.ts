import IMedia from "../Interfaces/IMedia";

class Media implements IMedia
{
    url: String;
    type: String;
    constructor(url: string, type: string)
    {
        this.url = url;
        this.type = type;
    }
}
export default Media;