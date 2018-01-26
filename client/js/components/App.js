import React from 'react';
import Header from './Header';

import '../../sass/style.scss';

export default function App({ state, children }) {
  return (
    <div>
      {state.content && <Header />}
      {children}
    </div>
  );
}
