import type { Meta, StoryObj } from '@storybook/react';

import DirectionsBusOutlined from '../../lib/maps/DirectionsBusOutlined';

const meta: Meta<typeof DirectionsBusOutlined> = {
  component: DirectionsBusOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsBusOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsBusOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
