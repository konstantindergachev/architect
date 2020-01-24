import React from 'react';
import { AppContext } from '../../provider/AppProvider';

const Person = () => {
  return (
    <div className="person">
      <AppContext.Consumer>
        {(context) => (
          <React.Fragment>
            <p className="person__name">Имя: {context.state.name}</p>
            <p className="person__email">Email: {context.state.email}</p>
            <p className="person__age">Баллы: {context.state.points}</p>
          </React.Fragment>
        )}
      </AppContext.Consumer>
    </div>
  );
};

export default Person;
