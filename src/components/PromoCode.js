import React, { useState } from 'react';
import { Collapse } from 'reactstrap';
import { Row, Col } from "bootstrap-4-react/lib/components/layout";
import { Form, Button} from "react-bootstrap";
import { connect } from "react-redux";
import { promoCodeToggle, promoCodeCreator } from "../actions";

const PromoCode = ({dispatch, open, active}) => {
    let input

    return (
        <Row>
            <Col><p className="item-details-btn"
                    onClick={() =>dispatch(promoCodeToggle(open))}
            >{ open ? 'Hide Promo code -' : 'Apply Promo code +' }</p>
                <Collapse isOpen={open}>
                    <Form className="form-promocode">
                        <Form.Group>
                            <Form.Label><strong>Promo Code</strong></Form.Label>
                            <Form.Control type="text"
                                          ref={(node) => (input = node)}
                                          placeholder="Enter Promo Code" />
                        </Form.Group>
                        <Button
                            onClick={(e) =>{
                                e.preventDefault();
                                dispatch(promoCodeCreator(input.value));
                                input.value = '';
                            }}
                            variant="primary" size="lg" block type="submit" disabled={active}>
                            Apply
                        </Button>
                    </Form>
                </Collapse>
            </Col>
        </Row>
    );
}

export default connect()(PromoCode)