import React from 'react';
import { exerciseCategories } from '../data/exercises';
import CategoryCard from '../components/CategoryCard';

interface HomePageProps {
  onSelectCategory: (categoryId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectCategory }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Exercícios de Recuperação e Fortalecimento</h2>
          <p className="text-gray-600">
            Selecione uma categoria de exercícios para começar sua jornada de reabilitação !
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exerciseCategories.map(category => (
            <CategoryCard 
              key={category.id}
              category={category}
              onClick={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;