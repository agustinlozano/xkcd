import { Container } from '@nextui-org/react'
import Link from 'next/link'


export default function Header() {
  return (
    <Container
      as='header'
      responsive
      className='flex justify-between items-center p-4 mw-wx-l m-auto'
      >
      <h1 className='font-bold'>next<spam className='font-light'>xkcd</spam></h1>
      <nav>
        <Container as='nav'>
          <ul className='flex gap-2 '>
            <li><Link href='/'><a className='text-sm font-semibold'>Home</a></Link></li>
            <li><Link href='/about'><a className='text-sm font-semibold'>About</a></Link></li>
            <li><Link href='/search'><a className='text-sm font-semibold'>Search</a></Link></li>
          </ul>
        </Container>
      </nav>
    </Container>
  )
}
