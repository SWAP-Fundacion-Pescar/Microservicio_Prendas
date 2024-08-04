interface IReceivedDataForClotheDTO
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
    expectedDescription: string;
    media: File;
}
export default IReceivedDataForClotheDTO;