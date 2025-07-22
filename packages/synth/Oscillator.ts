import { ModulerNode, AudioModule } from './Composer'
import { getContext } from './SharedContext'

type Params = {
  type: OscillatorType
  frequency: number
}

export const createOscillator = (params: Params): ModulerNode => {
  return (): AudioModule => {
    const ctx = getContext()
    const osc = ctx.createOscillator()
    osc.type = params.type
    osc.frequency.value = params.frequency

    return {
      context: ctx,
      node: osc,
      start: () => {
        osc.start()
      },
      stop: () => {
        osc.stop()
      },
    }
  }
}