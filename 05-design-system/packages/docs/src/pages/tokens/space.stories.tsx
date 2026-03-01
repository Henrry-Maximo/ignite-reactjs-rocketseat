import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { space } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Spaces',
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
        <h1>Space</h1>

        <TokensGrid tokens={space} hasRemValue />
      </>
    )
  },
}