import { Route, Routes } from 'react-router-dom'
import PATH from './constants/path'
import { MainLayout } from './layouts'
import { Home } from './pages'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index path={PATH.home} element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
