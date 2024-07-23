import logo from './logo.svg';
import './App.css';
import AddSubscribers from './components/AddSubscribers';
import ViewSubscriber from './components/ViewSubscriber';
import SearchSubscriber from './components/SearchSubscriber';
import DeleteSubscriber from './components/DeleteSubscriber';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<AddSubscribers />} />
          <Route path='/View' element={<ViewSubscriber />} />
          <Route path='/Search' element={<SearchSubscriber />} />
          <Route path='/Delete' element={<DeleteSubscriber />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
