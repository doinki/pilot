import type { Meta, StoryObj } from '@storybook/react';

import SwitchAccessShortcutAddOutlined from '../../lib/action/SwitchAccessShortcutAddOutlined';

const meta: Meta<typeof SwitchAccessShortcutAddOutlined> = {
  component: SwitchAccessShortcutAddOutlined,
  tags: ['autodocs'],
  title: 'action/SwitchAccessShortcutAddOutlined',
};

export default meta;
type Story = StoryObj<typeof SwitchAccessShortcutAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
