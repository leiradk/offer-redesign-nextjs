import Image from 'next/image'
import someImage from '../images/sample.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={someImage} alt="Some text" />
    </main>
  )
}
