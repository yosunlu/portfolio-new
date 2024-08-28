
export default function Container({children} : any) {
  return (
    <div className="flex flex-col max-w-[80%] ml-10 sm:ml-40">{children}</div>
  )
}
