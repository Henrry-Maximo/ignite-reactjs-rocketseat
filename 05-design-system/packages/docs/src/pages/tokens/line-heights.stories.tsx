import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { lineHeights } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Line Heights',
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
        <h1>Line Heights</h1>

        <TokensGrid tokens={lineHeights} />
      </>
    )
  },
}