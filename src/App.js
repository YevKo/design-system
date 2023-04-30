import Route from './components/Route';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';
import Sidebar from './components/sidebar/Sidebar';
import useNavigation from './hooks/use-navigation';

function App() {
  const { currentPath } = useNavigation();
  let pageName = 'Design system';

  const setPageName = () => {
    switch (currentPath) {
      case '/': return pageName = "Buttons"
      case '/accordion': return pageName = "Accordion"
      case '/dropdown': return pageName = "Dropdown"
      case '/modal': return pageName = "Modal"
      case '/table': return pageName = "Table"
      case '/counter': return pageName = "Counter"
    }
  }

  return (
    <div className="App">
      <header className="flex flex-col justify-center bg-gray-200 px-8 py-6">
        <h1 className="text-6xl font-semibold leading-[1.1]">{ setPageName() }</h1>
      </header>
      <div className="flex flex-col sm:flex-row h-screen mx-auto">
        <Sidebar />
        <div className="text-left py-8 px-4 sm:w-9/12">
          <Route path="/">
            <ButtonPage/>
          </Route>
          <Route path="/accordion">
            <AccordionPage/>
          </Route>
          <Route path="/dropdown">
            <DropdownPage />
          </Route>
          <Route path="/modal">
            <ModalPage />
          </Route>
          <Route path="/table">
            <TablePage />
          </Route>
          <Route path="/counter">
            <CounterPage initialCount={20}/>
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
