import { Button } from '@/components/Button'
import { IconLink } from '../components/IconLink'
import { StarField } from '../components/StarField'
import '../styles/tailwind.css'
import '../styles/typography.css'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Unsubscribe() {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await toast.promise(
      fetch('/api/deleteRecord', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      }),
      {
        pending: 'removing you from our List..',
        success: 'Email Removed from our List 👌',
        error: 'Email Not Removed 🤯'
      },
  {theme: 'light', position: 'top-left'});

  };

  return (
    <div className="absolute isolate flex flex-auto flex-col items-center justify-center overflow-hidden bg-gray-950 text-center h-full w-full" >
      <svg
        aria-hidden="true"
        className="absolute top-[-10vh] left-1/2 -z-10 h-[120vh] w-[120vw] min-w-[60rem] -translate-x-1/2"
      >
        <defs>
          <radialGradient id="gradient" cy="0%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#gradient)" />
      </svg>
      <StarField className="sm:-mt-16" />

      <p className="font-display text-4xl/tight font-light text-white">😥</p>
      <h1 className="mt-4 font-display text-xl/8 font-semibold text-white">
        Sorry That we see you Goo :(
      </h1>
      <form className="relative isolate mt-8 flex items-center pr-1" onSubmit={handleSubmit}>
      <label className="sr-only">
        Email address
      </label>
      <input
        required
        type="email"
        autoComplete="email"
        name="email"
        placeholder="Email address"
        className="peer flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-hidden sm:text-[0.8125rem]/6"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit" arrow>
        Unsubsribe
      </Button>
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
      <ToastContainer />
    </form>
      <IconLink href="/" className="mt-4">
        Go back home
      </IconLink>
    </div>
  )
}
