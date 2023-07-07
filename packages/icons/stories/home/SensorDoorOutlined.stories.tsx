import type { Meta, StoryObj } from '@storybook/react';

import SensorDoorOutlined from '../../lib/home/SensorDoorOutlined';

const meta: Meta<typeof SensorDoorOutlined> = {
  component: SensorDoorOutlined,
  tags: ['autodocs'],
  title: 'home/SensorDoorOutlined',
};

export default meta;
type Story = StoryObj<typeof SensorDoorOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
