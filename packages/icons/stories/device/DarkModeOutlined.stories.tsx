import type { Meta, StoryObj } from '@storybook/react';

import DarkModeOutlined from '../../lib/device/DarkModeOutlined';

const meta: Meta<typeof DarkModeOutlined> = {
  component: DarkModeOutlined,
  tags: ['autodocs'],
  title: 'device/DarkModeOutlined',
};

export default meta;
type Story = StoryObj<typeof DarkModeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
