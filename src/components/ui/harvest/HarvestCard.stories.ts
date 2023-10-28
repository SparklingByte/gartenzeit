import type {Meta, StoryObj} from '@storybook/react';
import HarvestCard from './HarvestCard';
import mockHarvestData from '../../../app/data/harvest.json'

const meta = {
  title: 'Components/Harvest/HarvestCard',
  component: HarvestCard,
} satisfies Meta<typeof HarvestCard>

export default meta;

type Story = StoryObj<typeof meta>

export const ConfirmedParticpation: Story = {
  args: {
    title: mockHarvestData.title,
    date: mockHarvestData.date,
    locationName: mockHarvestData.location,
    time: mockHarvestData.time,
    vegetables: mockHarvestData.vegetables,
    userParticipationStatus: 'confirmed',
  }
}
