import { createOscillator, createFilter, createAmplifier, compose } from '@otone/synth'

const osc = createOscillator({
  type: 'sawtooth',
  frequency: 440,
})
const filter = createFilter({
  frequency: 1000,
})
const amp = createAmplifier({
  gain: 0.5,
})

const synth = compose(
  osc,
  filter,
  amp,
)


const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')

startButton?.addEventListener('click', () => {
  synth.play()
})

stopButton?.addEventListener('click', () => {
  synth.stop()
})
