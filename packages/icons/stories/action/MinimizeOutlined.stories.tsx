import type { Meta, StoryObj } from '@storybook/react';

import MinimizeOutlined from '../../lib/action/MinimizeOutlined';

const meta: Meta<typeof MinimizeOutlined> = {
  component: MinimizeOutlined,
  tags: ['autodocs'],
  title: 'action/MinimizeOutlined',
};

export default meta;
type Story = StoryObj<typeof MinimizeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
