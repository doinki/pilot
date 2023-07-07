import type { Meta, StoryObj } from '@storybook/react';

import UndoOutlined from '../../lib/content/UndoOutlined';

const meta: Meta<typeof UndoOutlined> = {
  component: UndoOutlined,
  tags: ['autodocs'],
  title: 'content/UndoOutlined',
};

export default meta;
type Story = StoryObj<typeof UndoOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
