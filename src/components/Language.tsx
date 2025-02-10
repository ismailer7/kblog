'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import logo from '../images/uk.png';

function ThemeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"
      />
    </svg>
  )
}

export function Language() {
  let [mounted, setMounted] = useState(false)
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (

    <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" type="button"
    className="group absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 m-2.5 p-1.5 text-green"
    onClick={() => setTheme(otherTheme)}>
        <span className="sr-only">Open user menu</span>
        Language 
    </button>

  )
}
