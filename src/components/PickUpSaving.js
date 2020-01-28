import React from "react";
import { Row, Col} from "bootstrap-4-react/lib/components/layout";

const PickUpSaving = (props) => {
    return (
        <Row>
            <Col><p
                data-placement="bottom"
                title="You can save 3.74% of the total">
                <u>Pickup Saving</u>
            </p></Col>
            <Col className="subtotal_price">{ `$${props.pickupsaving}` }</Col>
        </Row>
    )
}

export default PickUpSaving;