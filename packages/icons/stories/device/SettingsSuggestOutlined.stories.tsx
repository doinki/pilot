import type { Meta, StoryObj } from '@storybook/react';

import SettingsSuggestOutlined from '../../lib/device/SettingsSuggestOutlined';

const meta: Meta<typeof SettingsSuggestOutlined> = {
  component: SettingsSuggestOutlined,
  tags: ['autodocs'],
  title: 'device/SettingsSuggestOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsSuggestOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
