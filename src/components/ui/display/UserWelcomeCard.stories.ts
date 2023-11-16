import type {Meta, StoryObj} from '@storybook/react';
import UserWelcomeCard from './UserWelcomeCard';

const meta = {
  title: 'Components/Display/UserWelcomeCard',
  component: UserWelcomeCard,
} satisfies Meta<typeof UserWelcomeCard>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    username: 'Dieter124',
    userProfileImage: '/tempProfilePicture.jpg',
  }
}
