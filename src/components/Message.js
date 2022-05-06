import React from "react";
import { PageContainer } from "./Container";

const MessageComponent = (props) => {
    return (
        <PageContainer>
            <p className="text-white uppercase fs-600 letter-spacing-3">{props.message}</p>
        </PageContainer>
    )
}

export default MessageComponent;