import React from 'react';
import { Dumbbell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-teal-600 to-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Dumbbell className="h-8 w-8" />
          <h1 className="text-2xl font-bold">FisioExercícios</h1>
        </div>
        <p className="text-sm md:text-base font-light">Sua jornada para recuperação e força</p>
      </div>
    </header>
  );
};

export default Header;