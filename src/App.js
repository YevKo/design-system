import './App.css';
import Button from './components/buttons/Button';

function App() {
  return (
    <div className="App">
      <header className="flex flex-col justify-center bg-gray-200 px-10 py-8">
        <h1 className="text-8xl font-semibold leading-[1.3] mb-8">Buttons</h1>
      </header>
      <div className="flex flex-col gap-8 text-left py-8">
        <article className="flex flex-col gap-3 items-center">
          <header><h2 className="text-4xl font-semibold leading-snug mb-4">Primary button variants</h2></header>
          <div>
            <Button primary onClick={() => {console.log('Clicked')}}>Primary button</Button>
          </div>
          <div>
            <Button primary ghost>Ghost primary button</Button>
          </div>
          <div>
            <Button primary rounded icon="search">Rounded primary button</Button>
          </div>
        </article>
        <article className="flex flex-col gap-3 items-center">
          <header><h2 className="text-4xl font-semibold leading-snug mb-4">Secondary button variants</h2></header>
          <div>
            <Button secondary>Secondary button</Button>
          </div>
          <div>
            <Button secondary rounded>Secondary rounded button</Button>
          </div>
          <div>
            <Button secondary ghost icon="arrow">Ghost secondary button</Button>
          </div>
        </article>
        <article className="flex flex-col gap-3 items-center">
          <header><h2 className="text-4xl font-semibold leading-snug mb-4">Tertiary button variants</h2></header>
          <div>
            <Button tertiary icon="download">Tertiary button</Button>
          </div>
          <div>
            <Button tertiary ghost rounded>Ghost tertiary button</Button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
