import type { Meta, StoryObj } from '@storybook/react';

import TextIncreaseOutlined from '../../lib/editor/TextIncreaseOutlined';

const meta: Meta<typeof TextIncreaseOutlined> = {
  component: TextIncreaseOutlined,
  tags: ['autodocs'],
  title: 'editor/TextIncreaseOutlined',
};

export default meta;
type Story = StoryObj<typeof TextIncreaseOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
