import { lazy, Suspense, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { LoadingScreen } from '@/components/LoadingScreen'
import { useLenis } from '@/hooks/useLenis'

const HomePage = lazy(() => import('@/pages/Home'))

function PageSkeleton() {
  return <div className="min-h-screen bg-bg" aria-hidden />
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  useLenis(loaded)

  return (
    <>
      <AnimatePresence mode="wait">
        {!loaded && <LoadingScreen key="loader" onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <Suspense fallback={<PageSkeleton />}>
          <HomePage />
        </Suspense>
      )}
    </>
  )
}
