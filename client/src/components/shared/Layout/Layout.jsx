import React from 'react';
import Header from '../Header/Header';

const Layout = (props) => {
  return (
    <div>
      <Header search={props.search} onChange={props.onChange}/>
      {props.children}
    </div>
  );
};

export default Layout;