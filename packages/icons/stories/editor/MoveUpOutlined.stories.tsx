import type { Meta, StoryObj } from '@storybook/react';

import MoveUpOutlined from '../../lib/editor/MoveUpOutlined';

const meta: Meta<typeof MoveUpOutlined> = {
  component: MoveUpOutlined,
  tags: ['autodocs'],
  title: 'editor/MoveUpOutlined',
};

export default meta;
type Story = StoryObj<typeof MoveUpOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
