import type { Meta, StoryObj } from '@storybook/react';

import ParkOutlined from '../../lib/maps/ParkOutlined';

const meta: Meta<typeof ParkOutlined> = {
  component: ParkOutlined,
  tags: ['autodocs'],
  title: 'maps/ParkOutlined',
};

export default meta;
type Story = StoryObj<typeof ParkOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
