'use client'

import { useEffect, useState } from 'react'
import { Dropdown, DropdownButton, DropdownItem, DropdownMenu } from '@/components/dropdown'
import ReactCountryFlag from "react-country-flag"


export function Language() {
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    /*<div className="group absolute top-4 right-0 transform -translate-x-1/2 -translate-y-1/2 z-50 m-2.5 p-2.5" style={{marginTop: 15 + 'px', marginLeft: 25 + 'px'}}>
      <Dropdown>
      <DropdownButton >
      <ReactCountryFlag countryCode="US" svg/> English
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="#"><ReactCountryFlag countryCode="FR" svg/> French</DropdownItem>
        <DropdownItem href="#"><ReactCountryFlag countryCode="ES" svg/> Spanish</DropdownItem>
        <DropdownItem href="#"><ReactCountryFlag countryCode="DE" svg/> Deutch</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>*/
    <div></div>

  )
}
