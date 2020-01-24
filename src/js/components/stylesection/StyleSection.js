import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import SectionTitle from '../sectiontitle/SectionTitle';
import ArchitectIcon from './styleicons/ArchitectIcon';

const StyleSection = () => {
  const { data: { styleSection } } = useContext(AppContext);

  const renderArchitectSyles = (styles) => {
    return styles.map((item) => <ArchitectIcon key={item} item={item} />);
  };
  return (
    <section className="style__section">
      <div className="architect__icons">
        <SectionTitle title={styleSection.title} classname="style" />
        {renderArchitectSyles(styleSection.icons)}
      </div>
    </section>
  );
};

export default StyleSection;
