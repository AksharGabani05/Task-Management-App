import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import store from './Redux/Store/store';
import Hader from './components/Hader';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Footer from './components/Footer';


function App() {
  return (
    <Provider store={store}>
   
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} /> 
          <Route 
            path="/todo" 
            element={
              <>
                <Hader />
                <Todo />
                <Footer/>
              </>
            } 
          />
          <Route path="*" element={<NotFound />} />
          
        </Routes>
    
    </Provider>
  );
}

export default App;
