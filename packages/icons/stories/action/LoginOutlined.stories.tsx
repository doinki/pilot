import type { Meta, StoryObj } from '@storybook/react';

import LoginOutlined from '../../lib/action/LoginOutlined';

const meta: Meta<typeof LoginOutlined> = {
  component: LoginOutlined,
  tags: ['autodocs'],
  title: 'action/LoginOutlined',
};

export default meta;
type Story = StoryObj<typeof LoginOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
