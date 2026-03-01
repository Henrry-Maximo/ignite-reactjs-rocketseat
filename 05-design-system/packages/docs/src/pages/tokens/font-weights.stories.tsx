import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { fontWeights } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Font Weights',
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
        <h1>Font Weights</h1>

        <TokensGrid tokens={fontWeights} />
      </>
    )
  },
}