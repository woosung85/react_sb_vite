import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { UIButton , UIBtnWrap, UICheckBox } from '@/stories/components'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <UICheckBox.Basic label='선택해주세요'/>
        <UIBtnWrap mt={20} variant='nth'>
          <UIButton variant="secondary" label="닫기" onClick={() => setCount(count + 1)} />
          <UIButton variant="primary" label="눌러주세요" onClick={() => setCount(count + 1)} />

        </UIBtnWrap>
        <a href="https://vite.dev" target="_blank">
          {/* <img src={viteLogo} className="logo" alt="Vite logo" /> */}
        </a>
        <a href="https://react.dev" target="_blank">
          {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
