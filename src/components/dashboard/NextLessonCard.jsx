import React from "react";

export default function NextLessonCard({
  lesson = { title: "Brak lekcji", id: null },
}) {
  return (
    <div className="card next-lesson">
      <h4>Następna lekcja</h4>
      <p className="muted">{lesson.title}</p>
      <button className="btn-primary">Kontynuuj</button>
    </div>
  );
}
