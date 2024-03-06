// React
import { useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

// Components
import { JsonYamlInput } from 'components/JsonYamlInput/JsonYamlInput';

// Files
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Styles
import './App.css'
import { SimpleDisplay } from 'components/SimpleDisplay/SimpleDisplay';


function App() {
  const [count, setCount] = useState(0);
  
  
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  const filledInputs = () => ({
    "string": "string data",
    "textarea": "textArea data",
    "secure": "secure"
  });

  useEffect(() => {
    console.log(`Counter: ${count}`);
  }, [count]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <h1>{count}</h1>
      <button onClick={() => setCount(count => count + 1)}>Counter</button>

      <h2>SimpleDisplay</h2>
      <SimpleDisplay count={count} />
    </>
  )
}

export default App
