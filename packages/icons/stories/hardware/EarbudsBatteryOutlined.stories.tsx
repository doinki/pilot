import type { Meta, StoryObj } from '@storybook/react';

import EarbudsBatteryOutlined from '../../lib/hardware/EarbudsBatteryOutlined';

const meta: Meta<typeof EarbudsBatteryOutlined> = {
  component: EarbudsBatteryOutlined,
  tags: ['autodocs'],
  title: 'hardware/EarbudsBatteryOutlined',
};

export default meta;
type Story = StoryObj<typeof EarbudsBatteryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
