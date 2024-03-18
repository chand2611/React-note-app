import React from "react";
import "./LNotesContent.css";

function LNotesContent({ note }) {
  return (
    <div>
      <div className="notes_content_note">
        <div className="notes_content_details">{note.content}</div>
        <div className="notes_content_date_time_details">
          <div className="notes_content_time">{note.date}</div>
          <div className="notes_content_date">{note.time}</div>
        </div>
      </div>
    </div>
  );
}

export default LNotesContent;
