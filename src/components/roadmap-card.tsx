import { ReactNode } from "react";

interface RoadmapCardProps {
  step: string;
  title: string;
  description: string;
  icon: ReactNode;
  skills: string[];
}

export function RoadmapCard({ step, title, description, icon, skills }: RoadmapCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan/20 to-accent-teal/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
      <div className="relative bg-tech-800 border border-tech-600/40 rounded-2xl p-6 thermal-glow">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan shrink-0">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-mono text-accent-cyan mb-1">{step}</div>
            <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400 mb-3">{description}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-full bg-tech-600/50 text-gray-300 border border-tech-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
