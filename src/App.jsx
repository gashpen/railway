import About from "./component/About/About"
import HowItWork from "./component/HowItWork/HowItWork"
import Reviews from "./component/Reviews/Reviews"
import { Route, Routes } from "react-router-dom"
import LayoutPage from "./component/Layout/Layout"
import SelectTicket from "./component/SelectTicket/TicketWidget/SelectTicket"
import SelectSeat from "./component/SelectTicket/SelectSeat"
import Payment from "./component/SelectTicket/Payment"
import Verification from "./component/SelectTicket/Verification"

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="ticket" element={<SelectTicket/>}/>
          <Route path="ticket/seat" element={<SelectSeat/>}/>
          <Route path="ticket/seat/payment" element={<Payment/>}/>
          <Route path="ticket/seat/payment/verification" element={<Verification/>}/>
          <Route index element={
            <>
              <About />
              <HowItWork />
              <Reviews />
            </>} />

        </Route>
      </Routes>

    </>
  )
}

export default App
