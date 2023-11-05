import type {Meta, StoryObj} from '@storybook/react';
import HarvestCardList from './HarvestCardList';
import mockHarvestData from '../../../app/data/harvest.json'

const meta = {
  title: 'Components/Harvest/HarvestCardList',
  component: HarvestCardList,
} satisfies Meta<typeof HarvestCardList>

export default meta;

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Your harvests',
    harvestPosts: [mockHarvestData, mockHarvestData],
    onShowAll: () => {},
  }
}
