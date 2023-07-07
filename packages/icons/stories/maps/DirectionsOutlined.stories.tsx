import type { Meta, StoryObj } from '@storybook/react';

import DirectionsOutlined from '../../lib/maps/DirectionsOutlined';

const meta: Meta<typeof DirectionsOutlined> = {
  component: DirectionsOutlined,
  tags: ['autodocs'],
  title: 'maps/DirectionsOutlined',
};

export default meta;
type Story = StoryObj<typeof DirectionsOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
