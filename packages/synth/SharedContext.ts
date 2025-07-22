let sharedContext: AudioContext | null = null

export const getContext = (): AudioContext => {
  if (!sharedContext) {
    sharedContext = new AudioContext()
  }
  return sharedContext
}