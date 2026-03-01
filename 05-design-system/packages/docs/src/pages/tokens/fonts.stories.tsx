import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { fonts } from '@ignite-ui/tokens'

export default {
  title: 'Tokens/Fonts Families',
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
        <h1>Fonts Families</h1>

        <TokensGrid tokens={fonts} />
      </>
    )
  },
}