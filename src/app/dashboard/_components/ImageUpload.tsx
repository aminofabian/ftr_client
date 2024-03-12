import React from 'react';
import { Label } from "@/components/ui/label";

type ImageData = {
  image: File;
}

type ImageFormProps = ImageData & {
  image: File;
  updateFields: (fields: Partial<ImageData>) => void;
}

const ImageUpload = ({ image, updateFields }: ImageFormProps) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      updateFields({ image: e.target.files[0] });
    }
  };
  
  return (
    <div>
    <div className="grid w-full max-w-sm items-center gap-1.5 text-sm">
    <Label htmlFor="image" className="text-primary">
    Upload An Image/Video (optional)
    </Label>
    <input
    type="file"
    accept="image/jpg, image/jpeg, image/png, video/mp4"
    id="image"
    multiple
    className="px-2 py-7 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800 ml-auto"
    onChange={handleImageChange}
    />
    {image && <span>{image.name}</span>} {/* Display the name of the selected file */}
    </div>
    </div>
    );
  };
  
  export default ImageUpload;