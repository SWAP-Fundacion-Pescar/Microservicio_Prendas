class UpdateClotheRequest {
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
    color?: string;
    expectedColor?: string;
    constructor(userId: string, clotheId: string, name: string, category: string, expectedCategory: string, size: string, expectedSize: string, gender: string, expectedGender: string, description: string, color: string, expectedColor: string) {
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
        this.color = color;
        this.expectedColor = expectedColor;
    }
}
export default UpdateClotheRequest;