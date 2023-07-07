import type { Meta, StoryObj } from '@storybook/react';

import HdrAutoSelectOutlined from '../../lib/device/HdrAutoSelectOutlined';

const meta: Meta<typeof HdrAutoSelectOutlined> = {
  component: HdrAutoSelectOutlined,
  tags: ['autodocs'],
  title: 'device/HdrAutoSelectOutlined',
};

export default meta;
type Story = StoryObj<typeof HdrAutoSelectOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
