import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <title>Zefri Fahlevi</title>
      <header className="fixed w-full">
        <div className="py-3 px-4 max-w-7xl bg-pink-300 mx-auto flex flex-row justify-between items-center">
          <div>
            <Link href="/">
              <a className="flex py-2 space-x-2">
                <img src="https://cdn.dribbble.com/users/1065266/screenshots/14888583/pierre-2__1_.png?compress=1&resize=1200x900" alt="profile" 
                className="w-6 h-6 object-cover rounded-full"/>
                <span className="font-semibold leading-[160%]">Its'Me</span>
              </a>
            </Link>
          </div>
          <div>kanan</div>
        </div>
      </header>
    </>
  )
}
