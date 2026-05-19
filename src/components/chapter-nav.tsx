"use client";

interface Section {
  id: string;
  label: string;
}

interface ChapterNavProps {
  sections: Section[];
}

export function ChapterNav({ sections }: ChapterNavProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
      {sections.map((s, i) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="text-xs px-3 py-1.5 rounded-full bg-tech-700/50 text-gray-400 hover:text-white hover:bg-tech-600/50 border border-tech-600/20 transition-all whitespace-nowrap"
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}
