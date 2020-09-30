import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

const Layout = (props) => {
  return (
    <div>
      <Header search={props.search} onChange={props.onChange}/>
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;