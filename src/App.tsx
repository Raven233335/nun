import { SillytavernProvider } from './hooks/useSillytavern';
import { GameView } from './components/SillyTavern/GameView';

function App() {
  return (
    <SillytavernProvider>
      <GameView />
    </SillytavernProvider>
  );
}

export default App;
