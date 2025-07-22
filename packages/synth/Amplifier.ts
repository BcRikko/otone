import { AudioModule, ModulerNode } from './Composer'
import { getContext } from './SharedContext'

type Params = {
  gain: number
}

export const createAmplifier = (params: Params): ModulerNode => {
  return (input?: AudioModule): AudioModule => {
    const ctx = getContext()
    const amp = ctx.createGain()
    amp.gain.value = params.gain

    input?.node.connect(amp)

    return {
      context: ctx,
      node: amp,
      start: () => {
        input?.start()
      },
      stop: () => {
        input?.stop()
      },
    }
  }
}