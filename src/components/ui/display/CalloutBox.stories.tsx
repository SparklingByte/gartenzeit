import type { Meta, StoryObj } from '@storybook/react';
import CalloutBox from './CalloutBox';
import Button from '../../buttons/Button';

const meta = {
  title: 'Components/Display/CalloutBox',
  component: CalloutBox,
} satisfies Meta<typeof CalloutBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'The title',
    description: 'This is a callout box',
    children: (
      <Button
        text='Okay'
        showIcon={false}
      ></Button>
    ),
  },
};
