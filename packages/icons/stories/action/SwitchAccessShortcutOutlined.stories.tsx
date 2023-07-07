import type { Meta, StoryObj } from '@storybook/react';

import SwitchAccessShortcutOutlined from '../../lib/action/SwitchAccessShortcutOutlined';

const meta: Meta<typeof SwitchAccessShortcutOutlined> = {
  component: SwitchAccessShortcutOutlined,
  tags: ['autodocs'],
  title: 'action/SwitchAccessShortcutOutlined',
};

export default meta;
type Story = StoryObj<typeof SwitchAccessShortcutOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
