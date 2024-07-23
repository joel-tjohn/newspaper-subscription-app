import logo from './logo.svg';
import './App.css';
import AddSubscribers from './components/AddSubscribers';
import ViewSubscriber from './components/ViewSubscriber';
import SearchSubscriber from './components/SearchSubscriber';
import DeleteSubscriber from './components/DeleteSubscriber';

function App() {
  return (
    <div>
      <AddSubscribers/>
      <ViewSubscriber/>
      <SearchSubscriber/>
      <DeleteSubscriber/>
    </div>
  );
}

export default App;
