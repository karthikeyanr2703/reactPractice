import React, { useEffect, useState } from 'react';
import styles from "./App.module.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
useEffect(()=>{
  handleSearch()
},[])
  const allImages = [
    { id: 1, src: '/src/assets/images/bike1.jpg', alt: 'bike' },
    { id: 2, src: '/src/assets/images/bike2.jpg', alt: 'bike' },
    { id: 3, src: '/src/assets/images/bike3.jpg', alt: 'bike' },
    { id: 4, src: '/src/assets/images/car1.jpg', alt: 'car' },
    { id: 5, src: '/src/assets/images/car2.jpg', alt: 'car' },
  ];

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setImages(allImages);
    } else {
      const filteredImages = allImages.filter(image =>
        image.alt.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setImages(filteredImages);
    }
  };

  const handleSearchKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.main}>
      <input
        type="text"
        placeholder='search...'
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleSearchKey}
      />
      <button onClick={handleSearch}>Search</button>
      <div className={styles.imgContainer}>
        {images.map((img) => (
          <img key={img.id} src={img.src} alt={img.alt} />
        ))}
      </div>
    </div>
  );
};

export default App;
