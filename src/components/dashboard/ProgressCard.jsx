import React from "react";

export default function ProgressCard({
  data = { percent: 0, lessonsDone: 0, streak: 0 },
}) {
  return (
    <div className="card progress-card">
      <h4>Postęp kursu</h4>
      <div className="progress-bar" aria-hidden>
        <div className="progress-fill" style={{ width: `${data.percent}%` }} />
      </div>
      <div
        className="progress-meta"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 8,
        }}
      >
        <div>{data.lessonsDone} lekcji ukończonych</div>
        <div>Streak: {data.streak} dni</div>
      </div>
    </div>
  );
}
