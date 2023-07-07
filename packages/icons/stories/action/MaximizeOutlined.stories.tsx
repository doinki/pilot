import type { Meta, StoryObj } from '@storybook/react';

import MaximizeOutlined from '../../lib/action/MaximizeOutlined';

const meta: Meta<typeof MaximizeOutlined> = {
  component: MaximizeOutlined,
  tags: ['autodocs'],
  title: 'action/MaximizeOutlined',
};

export default meta;
type Story = StoryObj<typeof MaximizeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
