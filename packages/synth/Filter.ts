import { AudioModule, ModulerNode } from './Composer'
import { getContext } from './SharedContext'

type Params = {
  frequency: number
}

export const createFilter = (params: Params): ModulerNode => {
  return (input?: AudioModule): AudioModule => {
    const ctx = getContext()
    const filter = ctx.createBiquadFilter()
    filter.type = 'lowpass'
    filter.frequency.value = params.frequency
    input?.node.connect(filter)

    return {
      context: ctx,
      node: filter,
      start: () => {
        input?.start()
      },
      stop: () => {
        input?.stop()
      },
    }
  }
}