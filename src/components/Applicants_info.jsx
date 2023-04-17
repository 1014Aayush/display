import React from "react";

export default function Applicants_info(props)
{
    return(
        <div className="Info_block">
            <div className="Applicant_Name">{props.name}</div>
            <div className="Applicant_Experience">{props.Experience}</div>
            <div className="Applicant_AppliedD">{props.ApplicationD}</div>
            <div className="Applicant_Education">{props.Education}</div>
            <div className="Action">Action</div>
        </div>
    );
}