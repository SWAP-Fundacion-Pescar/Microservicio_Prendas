class UpdateClotheRequest
{
    userId: string;
    clotheId: string;
    name?: string;
    category?: string;
    expectedCategory?: string;
    size?: string;
    expectedSize?: string;
    gender?: string;
    expectedGender?: string;
    description?: string;
    expectedDescription?: string;
    constructor(userId: string, clotheId: string, name: string, category: string, expectedCategory: string, size: string, expectedSize: string, gender: string, expectedGender: string, description: string, expectedDescription: string)
    {
        this.userId = userId;
        this.clotheId = clotheId;
        this.name = name;
        this.category = category;
        this.expectedCategory = expectedCategory;
        this.size = size;
        this.expectedSize = expectedSize;
        this.gender = gender;
        this.expectedGender = expectedGender;
        this.description = description;
        this.expectedDescription = expectedDescription;
    }
}
export default UpdateClotheRequest;