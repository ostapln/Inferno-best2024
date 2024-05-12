import { useState } from 'react';
import Banner from '../../assets/logo/home.png';
const PostNeeds = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedRegion, setSelectedRegion] = useState<string>('');
  
    const handleSearch = () => {
      // Реалізуйте функціонал для пошуку з використанням searchTerm та selectedRegion
      console.log('Searching for:', searchTerm, 'in region:', selectedRegion);
    };

    return (
        <>
      <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Введіть ваш пошуковий термін"
      />
      <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
        <option value="">Виберіть область</option>
        <option value="region1">Область 1</option>
        <option value="region2">Область 2</option>
        <option value="region3">Область 3</option>
        {/* Додайте інші області за потребою */}
      </select>
      <button onClick={handleSearch}>Пошук</button>
    </div>
        </>
    );
};

export default PostNeeds;
