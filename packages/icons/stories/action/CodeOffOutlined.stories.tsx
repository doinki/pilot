import type { Meta, StoryObj } from '@storybook/react';

import CodeOffOutlined from '../../lib/action/CodeOffOutlined';

const meta: Meta<typeof CodeOffOutlined> = {
  component: CodeOffOutlined,
  tags: ['autodocs'],
  title: 'action/CodeOffOutlined',
};

export default meta;
type Story = StoryObj<typeof CodeOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
