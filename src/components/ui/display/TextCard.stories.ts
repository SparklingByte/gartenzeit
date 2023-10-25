import type {Meta, StoryObj} from '@storybook/react';
import TextCard from './TextCard';

const meta = {
  title: 'Components/Display/TextCard',
  component: TextCard,
} satisfies Meta<typeof TextCard>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Default textbox',
    text: 'Hello test test testHello test test testHello test test testHello test test test Hello test test test Hello test test test Hello test test test ',
  }
}
