import type { Meta, StoryObj } from '@storybook/react';

import CodeOutlined from '../../lib/action/CodeOutlined';

const meta: Meta<typeof CodeOutlined> = {
  component: CodeOutlined,
  tags: ['autodocs'],
  title: 'action/CodeOutlined',
};

export default meta;
type Story = StoryObj<typeof CodeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
