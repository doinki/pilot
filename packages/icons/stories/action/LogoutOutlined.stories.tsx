import type { Meta, StoryObj } from '@storybook/react';

import LogoutOutlined from '../../lib/action/LogoutOutlined';

const meta: Meta<typeof LogoutOutlined> = {
  component: LogoutOutlined,
  tags: ['autodocs'],
  title: 'action/LogoutOutlined',
};

export default meta;
type Story = StoryObj<typeof LogoutOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
