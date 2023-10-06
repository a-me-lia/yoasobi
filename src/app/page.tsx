import Image from 'next/image'

export default function Home() {
  return (
<main>
    <div className='w-full h-screen relative'>
      <Image src='/ruby.avif' alt='ruby' fill className='object-cover'></Image>
    </div>
</main>
  )
}
