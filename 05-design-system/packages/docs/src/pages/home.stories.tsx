import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Home',
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
        <h1>Ignite UI</h1>
        <p>Design System do Ignite.</p>
      </>
    )
  },
}
