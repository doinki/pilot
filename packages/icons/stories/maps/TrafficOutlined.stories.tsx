import type { Meta, StoryObj } from '@storybook/react';

import TrafficOutlined from '../../lib/maps/TrafficOutlined';

const meta: Meta<typeof TrafficOutlined> = {
  component: TrafficOutlined,
  tags: ['autodocs'],
  title: 'maps/TrafficOutlined',
};

export default meta;
type Story = StoryObj<typeof TrafficOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
