import React from "react"
import { ReactDOM } from "react-dom/client"

export default function Profile()
{
    return(
        <div className="profile_container">
            <div class="profile_left">
                <div className="profile_image"></div>
                <div className="profile_name">NameHere</div>
                <div className="profile_upload">Upload</div>
            </div>
            <div className="profile_right">
                <div className="application_status">
                    <div className="Applied_dialog">
                        <div className="text_applicationstatus"></div>
                        Applied Jobs</div>
                    <div className="match_dialog">
                        Job Matches
                    </div>
                    <div className="interview_dialog">
                        Interview
                    </div>
                </div>
                <div className="profile_messages">
                    Messages
                    <div className="Messages"></div>
                    <div className="Messages"></div>
                    <div className="Messages"></div>
                </div>


            </div>
        </div>
    );

}