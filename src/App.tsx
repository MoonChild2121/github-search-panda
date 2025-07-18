import '../styled-system/styles.css';  // Import Panda CSS styles
import { ThemeProvider } from './context/ThemeContext';
import { HomePage } from './pages/HomePage';
 
function App() {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}
 
export default App;