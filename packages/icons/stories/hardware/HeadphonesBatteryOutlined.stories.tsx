import type { Meta, StoryObj } from '@storybook/react';

import HeadphonesBatteryOutlined from '../../lib/hardware/HeadphonesBatteryOutlined';

const meta: Meta<typeof HeadphonesBatteryOutlined> = {
  component: HeadphonesBatteryOutlined,
  tags: ['autodocs'],
  title: 'hardware/HeadphonesBatteryOutlined',
};

export default meta;
type Story = StoryObj<typeof HeadphonesBatteryOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
