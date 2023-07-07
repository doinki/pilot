import type { Meta, StoryObj } from '@storybook/react';

import SensorOccupiedOutlined from '../../lib/home/SensorOccupiedOutlined';

const meta: Meta<typeof SensorOccupiedOutlined> = {
  component: SensorOccupiedOutlined,
  tags: ['autodocs'],
  title: 'home/SensorOccupiedOutlined',
};

export default meta;
type Story = StoryObj<typeof SensorOccupiedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
