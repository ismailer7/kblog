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
    <div className="group absolute top-4 right-0 transform -translate-x-1/2 -translate-y-1/2 z-50 m-2.5 p-2.5 mt-15px" style={{marginTop: 15 + 'px'}}>
      <Dropdown>
      <DropdownButton >
      <ReactCountryFlag countryCode="US" svg/>
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem href="#"><ReactCountryFlag countryCode="FR" svg/></DropdownItem>
        <DropdownItem href="#"><ReactCountryFlag countryCode="ES" svg/></DropdownItem>
        <DropdownItem href="#"><ReactCountryFlag countryCode="DE" svg/></DropdownItem>
      </DropdownMenu>
    </Dropdown>
    </div>
  

  )
}
