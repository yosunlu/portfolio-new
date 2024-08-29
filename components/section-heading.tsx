
type SectionHeadingProps = {
    children: React.ReactNode;
  };

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h1 className="font-bold pt-20 text-6xl">
        {children}
    </h1>
  )
}
