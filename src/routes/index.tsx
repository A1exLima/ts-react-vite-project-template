import { Routes, Route } from 'react-router-dom'

import { LayoutDefault } from '../layout'
import { Home } from '../pages/home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LayoutDefault />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}
