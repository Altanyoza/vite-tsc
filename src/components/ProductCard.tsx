import React from 'react';
import Text from './Text';

interface ProductCardProps {
  title: string;
  description: string;
  price: string | number;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-contain"
          />
        </div>
      )}
      <div className="p-6">
        <Text size="lg" bold className="mb-2">{title}</Text>
        <Text color="secondary" className="mb-4">{description}</Text>
        <Text size="xl" bold className="text-amber-500">{price} ₽</Text>
      </div>
    </div>
  );
};

export default ProductCard;