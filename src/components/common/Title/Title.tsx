export default function Title({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div>
      <h5
        className={`${className} text-[#00d8ff] uppercase tracking-wide font-medium mb-4`}
      >
        {title}
      </h5>
    </div>
  );
}
