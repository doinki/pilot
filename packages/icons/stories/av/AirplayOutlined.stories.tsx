import type { Meta, StoryObj } from '@storybook/react';

import AirplayOutlined from '../../lib/av/AirplayOutlined';

const meta: Meta<typeof AirplayOutlined> = {
  component: AirplayOutlined,
  tags: ['autodocs'],
  title: 'av/AirplayOutlined',
};

export default meta;
type Story = StoryObj<typeof AirplayOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
