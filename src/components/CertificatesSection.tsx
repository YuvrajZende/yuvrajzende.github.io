import React from "react";
import { projects } from "@/data/portfolio";
import StatusBadge from "./StatusBadge";

const certificates = projects.filter(p => p.category === "certificates");

const CertificatesSection = () => (
  <section className="w-full max-w-6xl mx-auto px-6 mb-16">
    <h2 className="text-2xl font-bold mb-6">Certificates</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certificates.map(cert => (
        <div
          key={cert.id}
          className="rounded-xl border border-border bg-card/70 p-6 shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col md:flex-row gap-4"
        >
          <div className="relative">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-20 h-20 object-cover rounded-lg border border-border"
            />
            {/* Status Badge */}
            <div className="absolute -top-1 -right-1">
              <StatusBadge status={cert.status} />
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="font-semibold text-lg text-foreground mb-1">{cert.title}</div>
              <div className="text-sm text-muted-foreground mb-2">{cert.description}</div>
              <div className="flex flex-wrap gap-2 mb-2">
                {cert.technologies.map(tech => (
                  <span key={tech} className="text-xs bg-accent/40 px-2 py-0.5 rounded-full text-muted-foreground border border-border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={cert.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium shadow hover:bg-primary/90 transition-colors text-center"
            >
              View Certificate
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default CertificatesSection; 