import type { Meta, StoryObj } from '@storybook/react';

import SettingsCellOutlined from '../../lib/action/SettingsCellOutlined';

const meta: Meta<typeof SettingsCellOutlined> = {
  component: SettingsCellOutlined,
  tags: ['autodocs'],
  title: 'action/SettingsCellOutlined',
};

export default meta;
type Story = StoryObj<typeof SettingsCellOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
