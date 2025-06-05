import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // Scroll to top when changing categories
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    // Scroll to top when going back to home
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow py-6">
        {selectedCategory ? (
          <CategoryPage 
            categoryId={selectedCategory}
            onBack={handleBackToHome}
          />
        ) : (
          <HomePage onSelectCategory={handleSelectCategory} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;