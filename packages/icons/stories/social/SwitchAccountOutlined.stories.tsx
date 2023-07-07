import type { Meta, StoryObj } from '@storybook/react';

import SwitchAccountOutlined from '../../lib/social/SwitchAccountOutlined';

const meta: Meta<typeof SwitchAccountOutlined> = {
  component: SwitchAccountOutlined,
  tags: ['autodocs'],
  title: 'social/SwitchAccountOutlined',
};

export default meta;
type Story = StoryObj<typeof SwitchAccountOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
