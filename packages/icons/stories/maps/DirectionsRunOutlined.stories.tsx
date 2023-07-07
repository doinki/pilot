import type { Meta, StoryObj } from '@storybook/react';

import DirectionsRunOutlined from '../../lib/maps/DirectionsRunOutlined';

const meta: Meta<typeof DirectionsRunOutlined> = {
  component: DirectionsRunOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsRunOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsRunOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
