import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import NavBar from './components/NavBar';
import Home from './components/Home';

export default function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-amber-50">
        <NavBar />
        <main>
          <Home />
        </main>
      </div>
    </Provider>
  )
}