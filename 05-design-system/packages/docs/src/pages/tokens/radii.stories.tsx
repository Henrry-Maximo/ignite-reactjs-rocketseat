import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { radii } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Radii',
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
        <h1>Radii</h1>

        <TokensGrid tokens={radii} />
      </>
    )
  },
}