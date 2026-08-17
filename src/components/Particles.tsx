const leaves = Array.from({ length: 10 }, (_, i) => ({
  left: `${(i * 9.7 + 4) % 100}%`,
  duration: 16 + (i % 5) * 4,
  delay: i * 2.3,
  size: 8 + (i % 3) * 4,
}));

export function Particles() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {leaves.map((leaf, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={i % 3 === 0 ? "absolute text-accent/40" : "absolute text-primary/25"}
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            animation: `leaf-fall ${leaf.duration}s linear ${leaf.delay}s infinite`,
          }}
        >
          <path
            fill="currentColor"
            d="M20 3c-9 0-15 4.5-15 12 0 1.4.2 2.6.6 3.7L3 21.3 4.4 22.7l2.6-2.6C8.2 20.6 9.5 21 11 21c7 0 9-6.4 9-18Z"
          />
        </svg>
      ))}
    </div>
  );
}