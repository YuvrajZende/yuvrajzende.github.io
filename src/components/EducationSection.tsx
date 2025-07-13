import React from "react";
import { education } from "@/data/portfolio";

const EducationSection = () => (
  <section className="w-full max-w-6xl mx-auto px-6 mb-16">
    <h2 className="text-2xl font-bold mb-6">Education</h2>
    <div className="space-y-6">
      {education.map((edu, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-border bg-card/70 p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <div className="font-semibold text-lg text-foreground">{edu.institution}</div>
            <div className="text-sm text-muted-foreground">{edu.startYear} - {edu.endYear || 'Present'}</div>
          </div>
          <div className="text-primary font-medium mb-1">{edu.degree} in {edu.field}</div>
          {edu.grade && <div className="text-xs text-muted-foreground mb-1">Grade: {edu.grade}</div>}
          {edu.description && <div className="text-sm text-muted-foreground">{edu.description}</div>}
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection; 