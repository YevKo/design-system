import Route from './components/Route';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import Link from './components/links/Link';

function App() {
  const pageName="Page name";

  return (
    <div className="App">
      <header className="flex flex-col justify-center bg-gray-200 px-8 py-6">
        <h1 className="text-6xl font-semibold leading-[1.1]">{ pageName }</h1>
      </header>
      <div className="text-left py-8 px-4">
        <Link to="/accordion">Go to accordions</Link>
        <Link to="/dropdown">Go to dropdown</Link>
        <Route path="/buttons">
          <ButtonPage/>
        </Route>
        <Route path="/accordion">
          <AccordionPage/>
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
