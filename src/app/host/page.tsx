import dynamic from 'next/dynamic'

const Presentation = dynamic(() => import('@/components/presentation'), { ssr: false })

export default function Host() {
  return (
    <Presentation isHost />
  )
}
