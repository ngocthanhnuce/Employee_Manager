import React from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';
import 'antd/dist/antd.css';
import MenuHome from './components/admin/menu';
import NavBar from './components/admin/nav-bar';
import Footer from './components/admin/footer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <MenuHome/>
      <Footer/>
    </div>
  );
}

export default App;
