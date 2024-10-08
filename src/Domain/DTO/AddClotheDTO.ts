import Media from "../Entities/Media";

class AddClotheDTO
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
    color: string;
    expectedColor: string
    media: Media
    constructor(userId: string, name: string, category: string, expectedCategory: string, size: string, expectedSize: string, gender: string, expectedGender: string, 
        description: string, color: string, expectedColor: string, media: Media)
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
            this.color = color;
            this.expectedColor = expectedColor;
            this.media = media;
        }
}
export default AddClotheDTO;