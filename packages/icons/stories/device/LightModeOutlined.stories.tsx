import type { Meta, StoryObj } from '@storybook/react';

import LightModeOutlined from '../../lib/device/LightModeOutlined';

const meta: Meta<typeof LightModeOutlined> = {
  component: LightModeOutlined,
  tags: ['autodocs'],
  title: 'device/LightModeOutlined',
};

export default meta;
type Story = StoryObj<typeof LightModeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
