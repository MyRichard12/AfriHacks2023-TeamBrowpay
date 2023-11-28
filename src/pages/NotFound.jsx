import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <>
        <h1>Not Found</h1>
        <div>{error.statusText || error.message}</div>
        </>
    )
}

export default NotFound