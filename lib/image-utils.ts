import { handleError } from "./error-handling"

export type ImageDimensions = {
  width: number
  height: number
}

export async function getImageDimensions(src: string): Promise<ImageDimensions> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height,
      })
    }
    img.onerror = (error) => {
      reject(new Error(`Failed to load image: ${error}`))
    }
    img.src = src
    img.crossOrigin = "anonymous"
  })
}

export function getOptimizedImageUrl(
  originalUrl: string,
  options: { width?: number; height?: number; quality?: number } = {},
): string {
  try {
    // For placeholder images
    if (originalUrl.startsWith("/placeholder.svg")) {
      const params = new URLSearchParams()
      if (options.width) params.set("width", options.width.toString())
      if (options.height) params.set("height", options.height.toString())
      return `${originalUrl}?${params.toString()}`
    }

    // For real images, in a production app this would use a CDN or image optimization service
    return originalUrl
  } catch (error) {
    handleError(error, "Failed to optimize image")
    return originalUrl
  }
}

export function getAspectRatio(width: number, height: number): number {
  return width / height
}

export function getImagePlaceholder(width: number, height: number): string {
  return `/placeholder.svg?width=${width}&height=${height}`
}

