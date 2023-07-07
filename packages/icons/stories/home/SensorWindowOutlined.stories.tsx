import type { Meta, StoryObj } from '@storybook/react';

import SensorWindowOutlined from '../../lib/home/SensorWindowOutlined';

const meta: Meta<typeof SensorWindowOutlined> = {
  component: SensorWindowOutlined,
  tags: ['autodocs'],
  title: 'home/SensorWindowOutlined',
};

export default meta;
type Story = StoryObj<typeof SensorWindowOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
