import type { Meta, StoryObj } from '@storybook/react';

import ShortcutOutlined from '../../lib/device/ShortcutOutlined';

const meta: Meta<typeof ShortcutOutlined> = {
  component: ShortcutOutlined,
  tags: ['autodocs'],
  title: 'device/ShortcutOutlined',
};

export default meta;
type Story = StoryObj<typeof ShortcutOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
