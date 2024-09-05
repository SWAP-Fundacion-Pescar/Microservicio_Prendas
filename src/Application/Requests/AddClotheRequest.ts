class AddClotheRequest
{
    userId: string;
    name: string;
    category: string;
    expectedCategory: string;
    size: string;
    expectedSize: string;
    gender: string;
    expectedGender: string;
    description: string;
    media: Express.Multer.File;
    constructor(userId: string, name: string, category: string, expectedCategory: string, size: string, expectedSize: string, gender: string, expectedGender: string, 
                description: string, media: Express.Multer.File)
                {
                    this.userId = userId;
                    this.name = name;
                    this.category = category;
                    this.expectedCategory = expectedCategory;
                    this.size = size;
                    this.expectedSize = expectedSize;
                    this.gender = gender;
                    this.expectedGender = expectedGender;
                    this.description = description;
                    this.media = media;
                }
}
export default AddClotheRequest;