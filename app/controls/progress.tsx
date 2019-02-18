import * as React from "react";

export const Progress = ({progress}) => {
    if (progress)
        return <i className="fa fa-cog fa-spin"/>;
    else
        return null;
};