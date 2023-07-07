import type { Meta, StoryObj } from '@storybook/react';

import FlashlightOffOutlined from '../../lib/device/FlashlightOffOutlined';

const meta: Meta<typeof FlashlightOffOutlined> = {
  component: FlashlightOffOutlined,
  tags: ['autodocs'],
  title: 'device/FlashlightOffOutlined',
};

export default meta;
type Story = StoryObj<typeof FlashlightOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
