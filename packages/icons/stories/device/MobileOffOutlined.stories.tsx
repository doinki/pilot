import type { Meta, StoryObj } from '@storybook/react';

import MobileOffOutlined from '../../lib/device/MobileOffOutlined';

const meta: Meta<typeof MobileOffOutlined> = {
  component: MobileOffOutlined,
  tags: ['autodocs'],
  title: 'device/MobileOffOutlined',
};

export default meta;
type Story = StoryObj<typeof MobileOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
