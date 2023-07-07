import type { Meta, StoryObj } from '@storybook/react';

import WaterDropOutlined from '../../lib/social/WaterDropOutlined';

const meta: Meta<typeof WaterDropOutlined> = {
  component: WaterDropOutlined,
  tags: ['autodocs'],
  title: 'social/WaterDropOutlined',
};

export default meta;
type Story = StoryObj<typeof WaterDropOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
