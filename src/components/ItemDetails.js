import React, { useState } from 'react';
import { Collapse, Media, CardBody, Card } from 'reactstrap';
import { Row, Col} from "bootstrap-4-react/lib/components/layout";
import {connect} from "react-redux";
import { itemDetailToggle } from "../actions";

const ItemDetails = ({dispatch, open}) => {

    return (
        <Row>
            <Col><p className="item-details-btn"
                    onClick={() => dispatch(itemDetailToggle(open))}
            >{ open ? 'Hide item details -' : 'See item details +' }</p>
                <Collapse isOpen={open}>
                    <Media>
                        <Media object data-src="thin frame monitor"
                             src="https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
                             className="item-details-img"
                        />
                        <Media body>
                            <p className="media-body-text">Anim pariatur cliche reprehenderit</p>
                        </Media>
                    </Media>
                </Collapse>
            </Col>
        </Row>
    );
}

export default connect()(ItemDetails)