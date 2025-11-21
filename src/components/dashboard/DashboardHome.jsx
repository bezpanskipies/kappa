import React from "react";
import ProfileCard from "./ProfileCard";
import ProgressCard from "./ProgressCard";
import NextLessonCard from "./NextLessonCard";
import RecentActivity from "./RecentActivity";

export default function DashboardHome({ user }) {
  // przykładowe dane — podmień na propsy lub fetch
  const progress = { percent: 28, lessonsDone: 12, streak: 4 };
  const nextLesson = { title: "Hiragana: か–こ", id: "lesson-12" };

  return (
    <div className="home-grid">
      <div className="col-left">
        <ProfileCard user={user} />
        <NextLessonCard lesson={nextLesson} />
      </div>

      <div className="col-mid">
        <ProgressCard data={progress} />
        <RecentActivity />
      </div>

      <aside className="col-right">
        <div className="widget card">
          <h4>Twoje powtórki</h4>
          <p>5 kart do powtórki dziś</p>
          <button className="btn-primary">Otwórz powtórki</button>
        </div>
      </aside>
    </div>
  );
}
