import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export function heroEntrance(refs: {
  eyebrow?: HTMLElement | null
  name?: HTMLElement | null
  role?: HTMLElement | null
  sentence?: HTMLElement | null
  description?: HTMLElement | null
  stats?: HTMLElement | null
  ctas?: HTMLElement | null
  scroll?: HTMLElement | null
}) {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  const items = [
  refs.eyebrow,
  refs.name,
  refs.role,
  refs.sentence,
  refs.description,
  refs.stats,
  refs.ctas,
  refs.scroll,
  ].filter(Boolean) as HTMLElement[]

  gsap.set(items, { opacity: 0, y: 48, filter: 'blur(12px)' })

  tl.to(items, {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    duration: 1,
    stagger: 0.1,
  })

  return tl
}

export function animateCounter(
  el: HTMLElement,
  end: number,
  options?: { duration?: number; decimals?: number; suffix?: string },
) {
  const { duration = 2, decimals = 0, suffix = '' } = options ?? {}
  const obj = { val: 0 }

  return gsap.to(obj, {
    val: end,
    duration,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      once: true,
    },
    onUpdate: () => {
      el.textContent = `${obj.val.toFixed(decimals)}${suffix}`
    },
  })
}

export function initParallaxGallery(container: HTMLElement) {
  const panels = container.querySelectorAll('[data-parallax-panel]')
  const images = container.querySelectorAll('[data-parallax-image]')

  panels.forEach((panel) => {
    gsap.fromTo(
      panel,
      { y: 28, opacity: 0.75 },
      {
        y: 0,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: panel,
          start: 'top 92%',
          end: 'top 58%',
          scrub: 0.6,
        },
      },
    )
  })

  images.forEach((image) => {
    gsap.fromTo(image, { yPercent: -6 }, {
      yPercent: 6,
      ease: 'none',
      scrollTrigger: {
        trigger: image.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  })

  return () => {
    ScrollTrigger.getAll().forEach((st) => {
      if (container.contains(st.trigger as Node)) st.kill()
    })
  }
}
