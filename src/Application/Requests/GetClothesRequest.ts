class GetClothesRequest
{
    offset: number;
    limit: number;
    category: string;
    size: string;
    gender: string;
    constructor(offset: number, limit: number, category: string, size: string, gender: string)
    {
        this.offset = offset;
        this.limit = limit;
        this.category = category;
        this.size = size;
        this.gender = gender
    }
}
export default GetClothesRequest;
