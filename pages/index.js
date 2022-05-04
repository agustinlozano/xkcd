import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import fs from 'fs/promises'

export default function Home({ latestComics }) {

  console.log(latestComics)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />      
      <main>
        <h2 className='text-3xl font bold text-center mb-10'>Latest Comics</h2>
        <section className='grid grid-cols-1 gap-2 max-w-md m-auto sm:grid-cols-2 md:grid-cols-3'>
        {
          latestComics.map(comic => {
            return (
              <Link href={`/comic/${comic.id}`} key={comic.title}>
                <a className='mb-4 pb-4 m-auto'>
                  <h3 className='font-semibold text-sm text-center pb-2'>{comic.title}</h3>
                  <Image width='350' height='350' objectFit='contain' src={comic.img} alt={comic.alt} />
                </a>
              </Link>
            ) 
          })
        }
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
  const files = await fs.readdir('./comics')
  const latestComicsFiles = files.slice(-8, files.length)

  const promisesReadFiles = latestComicsFiles.map(async (file) => {
    const content = await fs.readFile(`./comics/${file}`, 'utf8')
    return JSON.parse(content)
  })

  const latestComics = await Promise.all(promisesReadFiles)

  return {
    props: {
      latestComics
    }
  }
}