
type SectionHeadingProps = {
    children: React.ReactNode;
  };

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h1 className="font-bold pt-24 text-6xl">
        {children}
    </h1>
  )
}
