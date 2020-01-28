import React from "react";
import { Row, Col} from "bootstrap-4-react/lib/components/layout";

const Subtotal = (props) => {
    return (
        <Row>
            <Col>Subtotal</Col>
            <Col><strong>{ `$${props.subtotal}` }</strong></Col>
        </Row>
    )
}

export default Subtotal;