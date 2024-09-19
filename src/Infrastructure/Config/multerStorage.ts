import multer from 'multer';
import path from 'path';
const fileCategories = {
    'image/': 'images',
    'video/': 'videos'
};
const getFileCategory = (mimetype: string): string => {
    for (const [key, value] of Object.entries(fileCategories)) {
        if (mimetype.startsWith(key)) {
            return value;
        }
    }
    return 'others';
};
const storage = multer.memoryStorage(); // Using memory storage to avoid saving files locally

const upload = multer({ storage: storage });

export default upload;