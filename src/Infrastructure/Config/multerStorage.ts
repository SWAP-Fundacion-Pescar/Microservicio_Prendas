import multer from 'multer';
import path from 'path';
import fs from 'fs';

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
const baseUploadPath = path.resolve(__dirname, '../../../../FrontEnd/public/uploads');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const fileCategory = getFileCategory(file.mimetype);
        const uploadPath = path.join(baseUploadPath, fileCategory);

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

export default upload;