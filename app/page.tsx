import Articles from '@/components/Articles'
import Carousel from '@/components/Carousel'
import Introduction from '@/components/Introduction'

export default function Home() {
  return (
    <div className='bg-black flex justify-center'>
      <div className='bg-[#18181b] w-[1200px] ring-1 ring-zinc-300/20 sm:px-20 px-8 py-28 space-y-16 min-h-screen h-fit'>
        <Introduction />
        {/* <Carousel /> */}
        <Articles />
      </div>
    </div>
  )
}
