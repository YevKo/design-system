import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';

function App() {
  const pageName="Page name";

  return (
    <div className="App">
      <header className="flex flex-col justify-center bg-gray-200 px-8 py-6">
        <h1 className="text-6xl font-semibold leading-[1.1]">{ pageName }</h1>
      </header>
      <AccordionPage />
    </div>
  );
}

export default App;
