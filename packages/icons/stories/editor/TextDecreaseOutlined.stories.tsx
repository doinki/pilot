import type { Meta, StoryObj } from '@storybook/react';

import TextDecreaseOutlined from '../../lib/editor/TextDecreaseOutlined';

const meta: Meta<typeof TextDecreaseOutlined> = {
  component: TextDecreaseOutlined,
  tags: ['autodocs'],
  title: 'editor/TextDecreaseOutlined',
};

export default meta;
type Story = StoryObj<typeof TextDecreaseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
