import { useId } from 'react'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 320 80">
  <style>
  </style>
  <rect width="100%" height="100%" fill="transparent"/>
  <text x="0" y="60" fontSize="60">
    <tspan fill='rgb(125,211,252)' fontFamily='Arial, sans-serif' fontWeight='bold'>C</tspan>
    <tspan className="white" fill='#FFFFFF'>ryptos</tspan>
    <tspan fill='rgb(125,211,252)' fontFamily='Arial, sans-serif' fontWeight='bold'>4</tspan>
  </text>
</svg>


  )
}
