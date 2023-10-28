import type {Meta, StoryObj} from '@storybook/react';
import AuthorCard from './AuthorCard';
import mockUser from '../../../app/data/user.json';

const meta = {
  title: 'Components/Display/AuthorCard',
  component: AuthorCard,
} satisfies Meta<typeof AuthorCard>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    username: mockUser.username,
    userProfilePicture: '/tempProfilePicture.jpg', 
  }
}
