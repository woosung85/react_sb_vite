import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { UIButton , UIBtnWrap, UICheckBox, UICheckGroup } from '@/stories/components'


function App() {
  const [count, setCount] = useState(0)

  const tempList =[
    { label: '선택해주세요1', value: '1' },
    { label: '선택해주세요2', value: '2' },
    { label: '선택해주세요3', value: '3' },
    { label: '선택해주세요4', value: '4' },
  ]

  return (
    <>
      <div>
        <UICheckGroup data={tempList} />
        <UICheckBox type='basic' label='선택해주세요'/>
        <UICheckBox type="btn" label='선택해주세요'/>
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
