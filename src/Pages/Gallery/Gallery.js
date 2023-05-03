import React, { useState } from 'react';
import style from './Gallery.module.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      title: 'Image 1',
       src:'https://akm-img-a-in.tosshub.com/lingo/gnt/images/story/202303/assam_tapoban_ngo_children-sixteen_nine.jpg?size=948:533',
    },
    {
      id: 2,
      title: 'Image 2',
      src: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202106/children_pti_1200x768_1200x768.jpeg?size=690:388' ,
    },
    {
      id: 3,
      title: 'Image 3',
      src: 'https://previews.agefotostock.com/previewimage/medibigoff/1b722336ef7a12aa604471208b155282/uig-928-09-d6-02149v10pd.jpg/wp-content/uploads/2023/03/DBSI.jpg',
    },
    {
      id: 4,
      title: 'Image 4',
      src: 'https://www.shutterstock.com/image-photo/smiling-face-portrait-young-child-260nw-639449695.jpg',
    },
    {
      id: 5,
      title: 'Image 5',
      src: 'https://img.bollycurry.com/wallpapers/1280x1024/349958-access-life-ngo-kids-bid-adieu-to-shriya-saran.jpg',
    },
    {
      id: 6,
      title: 'Image 6',
      src: 'https://www.shutterstock.com/shutterstock/photos/639450937/display_1500/stock-photo-smiling-faces-young-children-smiling-and-having-fun-from-rural-part-of-india-639450937.jpg',
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <section className={style.gallery}>
      <h2 className={style.title}>Gallery</h2>
      <div className={style.images}>
        {images.map((image) => (
          <div
            key={image.id}
            className={style.imageWrapper}
            onClick={() => handleImageClick(image)}
          >
            <img className={style.image} src={image.src} alt={image.title} />
            <div className={style.overlay}>
              <h3 className={style.imageTitle}>{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className={style.modal} onClick={handleModalClose}>
          <img className={style.modalImage} src={selectedImage.src} alt={selectedImage.title} />
          <div className={style.modalOverlay}>
            <h3 className={style.modalImageTitle}>{selectedImage.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;


