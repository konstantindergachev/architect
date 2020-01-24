import React, { useState } from 'react';
import SectionTitle from '../sectiontitle/SectionTitle';
import LeftArrow from './leftarrow/LeftArrow';
import RightArrow from './rightarrow/RightArrow';
import Slide from './slide/Slide';

const SliderSection = () => {
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
  const [ title ] = useState('Архитекторы шутят');
  const [ slides ] = useState([
    'slide-1',
    'slide-2',
    'slide-3',
    'slide-4',
    'slide-5',
    'slide-6',
    'slide-7',
    'slide-8',
    'slide-9',
    'slide-10',
  ]);

  const imgUrls = [
    `../../../img/slide-1.png`,
    `../../../img/slide-2.png`,
    `../../../img/slide-3.png`,
    `../../../img/slide-4.png`,
    `../../../img/slide-5.png`,
    `../../../img/slide-6.png`,
    `../../../img/slide-7.png`,
    `../../../img/slide-8.png`,
    `../../../img/slide-9.png`,
    `../../../img/slide-10.png`,
  ];
  const captions = [
    'Надеюсь вы выбрали хорошие места!',
    'На случай пожара. Ага.',
    'Как?! 😄',
    'В этом отеле есть уютное место для двоих.',
    'Босс, лестница построена точно по проекту.',
    'В одном уважаемом доме есть лестница, не позволяющая вам попасть в подвал.',
    'Угадайте где? Правильно! Школа дизайна 😎',
    'Прямо здесь!',
    'По-видимому, худший балкон.',
    'На мой, скромный взгляд, это победитель!',
  ];

  const prevSlide = () => {
    const lastIndex = slides.length - 1;
    const index = currentImageIndex === 0 ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };
  const nextSlide = () => {
    const lastIndex = slides.length - 1;
    const index = currentImageIndex === lastIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  return (
    <section className="slider__section">
      <SectionTitle title={title} classname="slider" />
      <div className="slider__section-container">
        <Slide
          url={imgUrls[currentImageIndex]}
          slide={currentImageIndex}
          captions={captions[currentImageIndex]}
        />
      </div>
      <LeftArrow prevSlide={prevSlide} />
      <RightArrow nextSlide={nextSlide} />
    </section>
  );
};

export default SliderSection;
