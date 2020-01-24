import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Article from './aboutarticle/AboutArticle';
import AboutIcons from './abouticons/AboutIcons';
import Quote from './quote/Quote';
import Text from './text/Text';

const AboutSection = () => {
  const { data: { aboutSection: { aboutIcons, articles, text } } } = useContext(
    AppContext
  );
  const renderText = (text) => {
    return text.map((item) => (
      <Text
        key={item.substring(0, 4)}
        text={item}
        classname={`${item.substring(0, 4) === 'В ми' ? 'first' : 'second'}`}
      />
    ));
  };
  const renderAboutIcons = (icons) => {
    return icons.map((item) => <AboutIcons key={item} image={item} />);
  };
  const renderArticles = (articles) => {
    return articles.map((item, idx) => (
      <Article
        key={item.substring(0, 4)}
        text={item}
        subclass={idx === 0 ? 'first' : idx === 1 ? 'second' : 'third'}
      />
    ));
  };
  return (
    <section className="about__section">
      <div className="about__section-container">
        <Quote alt="quote" />
        <h3>Arc</h3>
        {renderText(text)}
        {renderAboutIcons(aboutIcons)}
        {renderArticles(articles)}
      </div>
    </section>
  );
};

export default AboutSection;
