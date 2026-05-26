import { useEffect, useRef } from 'react'
import { cn } from '@/utils/cn'

type HlsVideoProps = {
  src: string
  className?: string
  mirrored?: boolean
}

export function HlsVideo({ src, className, mirrored = false }: HlsVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let destroyed = false
    let hlsInstance: { destroy: () => void } | null = null

    const setup = async () => {
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(() => {})
        })
        return
      }

      const { default: Hls } = await import('hls.js')
      if (destroyed || !Hls.isSupported()) return

      const hls = new Hls({ enableWorker: true, lowLatencyMode: true })
      hlsInstance = hls
      hls.loadSource(src)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {})
      })
    }

    setup()

    return () => {
      destroyed = true
      hlsInstance?.destroy()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className={cn(
        'absolute inset-0 h-full w-full object-cover',
        mirrored && 'scale-x-[-1]',
        className,
      )}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    />
  )
}
