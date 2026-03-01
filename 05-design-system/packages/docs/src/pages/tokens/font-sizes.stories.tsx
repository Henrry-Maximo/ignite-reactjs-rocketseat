import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { fontSizes } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Font Sizes',
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
        <h1>Font Sizes</h1>

        <TokensGrid tokens={fontSizes} hasRemValue />
      </>
    )
  },
}