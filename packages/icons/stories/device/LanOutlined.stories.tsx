import type { Meta, StoryObj } from '@storybook/react';

import LanOutlined from '../../lib/device/LanOutlined';

const meta: Meta<typeof LanOutlined> = {
  component: LanOutlined,
  tags: ['autodocs'],
  title: 'device/LanOutlined',
};

export default meta;
type Story = StoryObj<typeof LanOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
