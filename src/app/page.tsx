import dynamic from 'next/dynamic'

const Presentation = dynamic(() => import('@/components/presentation'), { ssr: false })

export default function Home() {
  return (
    <Presentation isHost={false} />
  )
}
