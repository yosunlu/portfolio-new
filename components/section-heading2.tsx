
type SectionHeadingProps = {
    children: React.ReactNode;
  };

export default function SectionHeading2({ children }: SectionHeadingProps) {
  return (
    <h1 className="font-semibold pt-4 text-3xl">
        {children}
    </h1>
  )
}
