
export default function Container({children} : any) {
  return (
    <div className="flex flex-col min-h-screen max-w-full ml-10 sm:ml-40">{children}</div>
  )
}
