export const globalFetch = (() => {
  if (
    typeof global !== 'undefined' &&
    'fetch' in global &&
    // @ts-ignore
    typeof global.fetch === 'function'
  ) {
    // @ts-ignore
    return global.fetch
  }

  if (typeof window !== 'undefined' && typeof window.fetch === 'function') {
    return window.fetch
  }

  // eslint-disable-next-line no-console
  console.error('No fetch found!')
})()
