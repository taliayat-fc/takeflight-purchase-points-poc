import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PurchasePointsScreen from './pages/PurchasePointsScreen'
import CheckoutScreen from './pages/CheckoutScreen'
import SuccessScreen from './pages/SuccessScreen'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PurchasePointsScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/success" element={<SuccessScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
