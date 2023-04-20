import './App.css';
import Button from './components/buttons/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <div>
        <Button primary>Primary button</Button>
      </div>
      <div>
        <Button secondary>Secondary button</Button>
      </div>
      <div>
        <Button tertiary>Tertiary button</Button>
      </div>
      <div>
        <Button primary rounded>Rounded primary button</Button>
      </div>
      <div>
        <Button secondary ghost>Ghost secondary button</Button>
      </div>
      <div>
        <Button tertiary ghost rounded>Ghost tertiary button</Button>
      </div>
    </div>
  );
}

export default App;
