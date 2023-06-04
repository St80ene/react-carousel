import './App.css';
import CarouselComponent from './components/Carousel';
import { imageList } from './components/images';

function App() {
  return (
    <div className='App'>
      <CarouselComponent images={imageList} />
    </div>
  );
}

export default App;
