import type { Meta, StoryObj } from '@storybook/react';

import TripOriginOutlined from '../../lib/maps/TripOriginOutlined';

const meta: Meta<typeof TripOriginOutlined> = {
  component: TripOriginOutlined,
  tags: ['autodocs'],
  title: 'maps/TripOriginOutlined',
};

export default meta;
type Story = StoryObj<typeof TripOriginOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
