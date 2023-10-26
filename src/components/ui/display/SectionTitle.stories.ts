import type {Meta, StoryObj} from '@storybook/react';
import SectionTitle from './SectionTitle';

const meta = {
  title: 'Components/Display/SectionTitle',
  component: SectionTitle,
} satisfies Meta<typeof SectionTitle>

export default meta;

type Story = StoryObj<typeof meta>

export const AllOptions: Story = {
  args: {
    title: 'Your harvests',
    helperText: 'Here you can see your harvests',
    linkText: 'See all',
  }
}

