import React from "react";
import Applicants_info from "../components/Applicants_info";

export default function(props)
{
    return(
        <div className="Container_jobapplied">
            <div className="header">
            </div>
            <div className="mid">
                <div className="Title">Applicant Information</div>
                <Applicants_info name="Name Here" Experience="2 Yrs" ApplicationD="2022 MAY 1" Education="CE"/>
                <Applicants_info name="Name Here" Experience="2 Yrs" ApplicationD="2022 MAY 1" Education="CE"/>
                <Applicants_info name="Name Here" Experience="2 Yrs" ApplicationD="2022 MAY 1" Education="CE"/>
                <Applicants_info name="Name Here" Experience="2 Yrs" ApplicationD="2022 MAY 1" Education="CE"/>
                <Applicants_info name="Name Here" Experience="2 Yrs" ApplicationD="2022 MAY 1" Education="CE"/>
                <Applicants_info name="Name Here" Experience="2 Yrs" ApplicationD="2022 MAY 1" Education="CE"/>
                <Applicants_info name="Name Here" Experience="2 Yrs" ApplicationD="2022 MAY 1" Education="CE"/>
            </div>
            <div className="footer"></div>
            
        </div>
    );
}