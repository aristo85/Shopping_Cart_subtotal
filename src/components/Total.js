import React from "react";
import { Row, Col} from "bootstrap-4-react/lib/components/layout";

const Total = (props) => {
    return (
        <Row className="total_price">
            <Col>Est. total</Col>
            <Col>{ `$${props.total}` }</Col>
        </Row>
    )
}

export default Total;