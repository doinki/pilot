import type { Meta, StoryObj } from '@storybook/react';

import DirectionsBikeOutlined from '../../lib/maps/DirectionsBikeOutlined';

const meta: Meta<typeof DirectionsBikeOutlined> = {
  component: DirectionsBikeOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsBikeOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsBikeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
