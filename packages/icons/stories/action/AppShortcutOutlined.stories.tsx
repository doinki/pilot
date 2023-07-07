import type { Meta, StoryObj } from '@storybook/react';

import AppShortcutOutlined from '../../lib/action/AppShortcutOutlined';

const meta: Meta<typeof AppShortcutOutlined> = {
  component: AppShortcutOutlined,
  tags: ['autodocs'],
  title: 'action/AppShortcutOutlined',
};

export default meta;
type Story = StoryObj<typeof AppShortcutOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
