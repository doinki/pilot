import type { Meta, StoryObj } from '@storybook/react';

import SettingsInputSvideoOutlined from '../../lib/action/SettingsInputSvideoOutlined';

const meta: Meta<typeof SettingsInputSvideoOutlined> = {
  component: SettingsInputSvideoOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsInputSvideoOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsInputSvideoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
