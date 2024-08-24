import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import CharacterSelection from './components/CharacterSelection';
import CardSelection from './components/CardSelection';
import MapSelection from './components/MapSelection'; // Renamed from Map to MapSelection for clarity
import Battle from './components/Battle';
import GlobalStyle from './styles/globalStyles'; // Import global styles
import Shop from './components/Shop';
import Campfire from './components/CampFire'; // Import
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Wrapper components to handle navigation
const CharacterSelectionWrapper = () => {
  const navigate = useNavigate();
  const handleNext = () => navigate('/cards');
  return <CharacterSelection onNext={handleNext} />;
};

const CardSelectionWrapper = () => {
  const navigate = useNavigate();
  const handleNext = () => navigate('/map');
  const handleBack = () => navigate('/');
  return <CardSelection onNext={handleNext} onBack={handleBack} />;
};

const MapSelectionWrapper = () => {
  const navigate = useNavigate();
  const handleNext = () => navigate(`/battle/0`); // You can pass a specific route index
  return <MapSelection onNext={handleNext} />;
};

function App() {
  return (
    <Router>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyle /> {/* Apply global styles */}
        <Routes>
          <Route path="/" element={<CharacterSelectionWrapper />} />
          <Route path="/cards" element={<CardSelectionWrapper />} />
          <Route path="/map" element={<MapSelectionWrapper />} />
          <Route path="/battle/:routeIndex" element={<Battle />} />
          <Route path="/campfire" element={<Campfire />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </DndProvider>
    </Router>
  );
}

export default App;
