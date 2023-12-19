import Articles from '@/components/Articles'
import Carousel from '@/components/Carousel'
import Introduction from '@/components/Introduction'

export default function Home() {
  return (
    <div>
      <Introduction />
      <Carousel />
      <Articles />
    </div>
  )
}
