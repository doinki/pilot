import type { Meta, StoryObj } from '@storybook/react';

import TokenOutlined from '../../lib/action/TokenOutlined';

const meta: Meta<typeof TokenOutlined> = {
  component: TokenOutlined,
  tags: ['autodocs'],
  title: 'action/TokenOutlined',
};

export default meta;
type Story = StoryObj<typeof TokenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
