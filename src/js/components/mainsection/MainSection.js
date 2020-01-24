import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Button from '../button/Button';
import MainText from './maintext/MainText';

const MainSection = () => {
  const { data: { mainSection } } = useContext(AppContext);
  const [ light, setLight ] = useState(false);

  const handleLightClick = () => setLight(!light);
  return (
    <section className="main__section">
      <MainText item={mainSection.mainTextDescr} />
      <Button
        item={mainSection.mainButton}
        lightClick={handleLightClick}
        searchlight={light}
      />
    </section>
  );
};

export default MainSection;
