import { skills } from "@/data/content";

export default function StackChips() {
  return (
    <div className="stack-groups">
      {skills.map((g) => (
        <div className="stack-group" key={g.group}>
          <div className="stack-group-name">
            <span className="stack-sigil">{g.sigil}</span>
            {g.group}
          </div>
          <div className="chips">
            {g.items.map((i) => (
              <span className="chip" key={i}>
                {i}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
