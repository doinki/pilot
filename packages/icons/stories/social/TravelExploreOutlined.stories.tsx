import type { Meta, StoryObj } from '@storybook/react';

import TravelExploreOutlined from '../../lib/social/TravelExploreOutlined';

const meta: Meta<typeof TravelExploreOutlined> = {
  component: TravelExploreOutlined,
  tags: ['autodocs'],
  title: 'social/TravelExploreOutlined',
};

export default meta;
type Story = StoryObj<typeof TravelExploreOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
