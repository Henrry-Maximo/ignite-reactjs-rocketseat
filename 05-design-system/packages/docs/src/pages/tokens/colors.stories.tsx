import type { Meta, StoryObj } from '@storybook/react'
import { ColorsGrid } from '../../components/ColorsGrid'

export default {
  title: 'Tokens/Colors',
  parameters: {
    options: {
      showPanel: false,
    },
  },
} as Meta

export const Page: StoryObj = {
  render: () => {
    return (
      <>
        <h1>Colors</h1>
        <p>Essas são as cores utilizadas no Ignite UI.</p>

        <ColorsGrid />
      </>
    )
  },
}
