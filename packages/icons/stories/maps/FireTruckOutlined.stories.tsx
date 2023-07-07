import type { Meta, StoryObj } from '@storybook/react';

import FireTruckOutlined from '../../lib/maps/FireTruckOutlined';

const meta: Meta<typeof FireTruckOutlined> = {
  component: FireTruckOutlined,
  tags: ['autodocs'],
  title: 'maps/FireTruckOutlined',
};

export default meta;
type Story = StoryObj<typeof FireTruckOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
