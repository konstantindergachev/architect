import React, { lazy, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MainSection from './components/mainsection/MainSection';
import Spinner from './components/ui/spinner/Spinner';

const StyleSection = lazy(() =>
  import('./components/stylesection/StyleSection')
);
const SliderSection = lazy(() =>
  import('./components/slidersection/SliderSection')
);
const AboutSection = lazy(() =>
  import('./components/aboutsection/AboutSection')
);
const Contact = lazy(() => import('./components/contact/Contact'));
const ErrorHandler = lazy(() =>
  import('./components/errorhandler/ErrorHandler')
);
const App = (props) => {
  return (
    <main className="app__wrapper">
      <Header propsLocation={props.location.pathname} />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <MainSection {...props} />}
          />
          <Route
            path="/style"
            render={(props) => <StyleSection {...props} />}
          />
          <Route
            path="/humor"
            render={(props) => <SliderSection {...props} />}
          />
          <Route
            path="/architect"
            render={(props) => <AboutSection {...props} />}
          />
          <Route path="/contact" render={(props) => <Contact {...props} />} />
          <Route render={(props) => <ErrorHandler {...props} />} />
        </Switch>
      </Suspense>
      <Footer propsLocation={props.location.pathname} />
    </main>
  );
};

export default withRouter(App);
