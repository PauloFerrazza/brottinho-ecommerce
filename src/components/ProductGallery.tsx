import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '../utils/utils';

interface ProductGalleryProps {
  images: string[];
  className?: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, className }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[selectedImage]}
          alt="Imagem do produto"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={cn(
                'relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg',
                selectedImage === index ? 'ring-2 ring-primary' : ''
              )}
            >
              <Image
                src={image}
                alt={`Miniatura ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery; 