export async function fetchWithRetry(url: string, init?: RequestInit, retries = 2, backoffMs = 300) {
  let lastError: any
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, init)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return res
    } catch (err) {
      lastError = err
      if (attempt === retries) break
      await new Promise((r) => setTimeout(r, backoffMs * (attempt + 1)))
    }
  }
  throw lastError
}