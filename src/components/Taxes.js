import React from "react";
import { Row, Col} from "bootstrap-4-react/lib/components/layout";

const Taxes = (props) => {
    return (
        <Row>
            <Col><p
                data-placement="bottom"
                title="Based on taxes rule for 2020">
                <u>Est. taxes & fees</u>
            </p></Col>
            <Col><strong>{ `$${props.taxes}` }</strong></Col>
        </Row>
    )
}

export default Taxes;