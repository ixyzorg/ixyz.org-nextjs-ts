import Link from 'next/link'
import Image from 'next/image'

const INavBarTitle = ({
  children
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="title h-nav">
      <Link href="/" className="flex h-full items-center">
        <Image
          src="/logo.jpg"
          width={32}
          height={32}
          alt={children as string}
          className="mr-2 rounded-2xl"
        />
        <h1 className="text-xl font-semibold">{children}</h1>
      </Link>
    </div>
  )
}
export default INavBarTitle
