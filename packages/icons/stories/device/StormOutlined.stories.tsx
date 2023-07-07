import type { Meta, StoryObj } from '@storybook/react';

import StormOutlined from '../../lib/device/StormOutlined';

const meta: Meta<typeof StormOutlined> = {
  component: StormOutlined,
  tags: ['autodocs'],
  title: 'device/StormOutlined',
};

export default meta;
type Story = StoryObj<typeof StormOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
