class GetClothesRequest
{
    offset?: number;
    limit?: number;
    category?: string;
    size?: string;
    gender?: string;
    name?:string
    constructor(offset?: number, limit?: number, category?: string, size?: string, gender?: string, name?:string)
    {
        this.offset = offset;
        this.limit = limit;
        this.category = category;
        this.size = size;
        this.gender = gender;
        this.name = name
    }
}
export default GetClothesRequest;
