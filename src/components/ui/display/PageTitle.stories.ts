import type { Meta, StoryObj} from '@storybook/react';
import PageTitle from './PageTitle';

const meta = {
  title: 'Components/Display/PageTitle',
  component: PageTitle
} satisfies Meta<typeof PageTitle>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Example Page',
    subtitle: 'Welcome to'
  }
}