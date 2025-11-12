import { useEffect, useState } from 'react'

export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia(query)
    const handler = (e) => setMatches(e.matches)
    mql.addEventListener?.('change', handler)
    // Fallback for older browsers
    mql.addListener?.(handler)
    setMatches(mql.matches)
    return () => {
      mql.removeEventListener?.('change', handler)
      mql.removeListener?.(handler)
    }
  }, [query])

  return matches
}
