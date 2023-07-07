import type { Meta, StoryObj } from '@storybook/react';

import NumbersOutlined from '../../lib/editor/NumbersOutlined';

const meta: Meta<typeof NumbersOutlined> = {
  component: NumbersOutlined,
  tags: ['autodocs'],
  title: 'editor/NumbersOutlined',
};

export default meta;
type Story = StoryObj<typeof NumbersOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
