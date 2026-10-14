export default function Bullet({ text }: { text: string }) {
  return (
    <li>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong className="metric" key={i}>
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </li>
  );
}
