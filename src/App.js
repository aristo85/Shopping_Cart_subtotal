import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Container } from "bootstrap-4-react/lib/components/layout";
import Subtotal from "./components/Subtotal";
import PickUpSaving from "./components/PickUpSaving";
import Taxes from "./components/Taxes";
import Total from "./components/Total";
import ItemDetails from "./components/ItemDetails";
import PromoCode from "./components/PromoCode";
import { checkPromoCode } from "./actions";

function App(props) {
    const saving = (props.price*-0.0374).toFixed(2);
    const taxes = (props.price*0.0784).toFixed(2);
    const promoCodeDiscount = checkPromoCode(props.promoCode);
    const total = ((props.price +(props.price*-0.0374)+(props.price*0.0784))*promoCodeDiscount).toFixed(2);

  return (
      <Container>
          <Subtotal subtotal={props.price}/>
          <br />
          <PickUpSaving pickupsaving={saving}/>
          <br />
          <Taxes taxes={taxes}/>
          <div><hr /></div>
          <Total total={total}/>
          <br />
          <ItemDetails open={props.itemDetailsOpen}/>
          <div><hr /></div>
          <PromoCode open={props.promoCodeOpen} active={checkPromoCode(props.promoCode) === 0.9} />
      </Container>
  );
}

export default connect(state =>({
    price: 100,
    promoCodeOpen: state.promoCodeToggle.promoCodeOpen,
    itemDetailsOpen: state.itemDetailsToggle.itemDetailsOpen,
    promoCode: state.promoCodeInput.promoCode
}), dispatch => ({}))(App);
