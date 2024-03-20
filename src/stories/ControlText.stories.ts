import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import ControlText from '../components/ControlText'

const meta = {
  title: 'ControlText',
  component: ControlText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} satisfies Meta<typeof ControlText>

export default meta
type Story = StoryObj<typeof meta>

export const Positive: Story = {
  args: {
    text: 'ControlText Text Positive',
    step: 1,
    value: 5,
    maxValue: 10,
    onValueChange: fn()
  },
}

export const Negative: Story = {
  args: {
    text: 'ControlText Text Negative',
    step: -1,
    value: -10,
    maxValue: 0,
    onValueChange: fn()
  }
}