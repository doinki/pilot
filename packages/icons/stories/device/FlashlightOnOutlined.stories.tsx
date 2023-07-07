import type { Meta, StoryObj } from '@storybook/react';

import FlashlightOnOutlined from '../../lib/device/FlashlightOnOutlined';

const meta: Meta<typeof FlashlightOnOutlined> = {
  component: FlashlightOnOutlined,
  tags: ['autodocs'],
  title: 'device/FlashlightOnOutlined',
};

export default meta;
type Story = StoryObj<typeof FlashlightOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
