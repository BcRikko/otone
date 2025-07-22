import { getContext } from './SharedContext'

export type AudioModule = {
  context: AudioContext
  node: AudioNode
  start: () => void
  stop: () => void
}

export type ModulerNode = (input?: AudioModule) => AudioModule

export const compose = (...fns: ModulerNode[]) => {
  const ctx = getContext()

  const chain = fns.reduce((acc, fn, i) => {
    return i === 0 ? fn() : fn(acc)
  }, {} as AudioModule)

  return {
    context: ctx,
    output: chain,
    play: () => {
      ctx.resume()
      chain.node.connect(ctx.destination)
      chain.start()
    },
    stop: () => {
      chain.stop()
    },
  }
}