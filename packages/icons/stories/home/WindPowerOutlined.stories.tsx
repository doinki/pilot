import type { Meta, StoryObj } from '@storybook/react';

import WindPowerOutlined from '../../lib/home/WindPowerOutlined';

const meta: Meta<typeof WindPowerOutlined> = {
  component: WindPowerOutlined,
  tags: ['autodocs'],
  title: 'home/WindPowerOutlined',
};

export default meta;
type Story = StoryObj<typeof WindPowerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
