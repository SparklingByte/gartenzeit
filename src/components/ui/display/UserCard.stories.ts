import type {Meta, StoryObj} from '@storybook/react';
import UserCard from './UserCard';

const meta = {
  title: 'Components/Display/UserCard',
  component: UserCard,
} satisfies Meta<typeof UserCard>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    username: 'Sample Username',
    locationName: 'Chemnitz',
    userProfilePicture: '/'
  }
}
