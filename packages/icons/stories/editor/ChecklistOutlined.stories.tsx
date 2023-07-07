import type { Meta, StoryObj } from '@storybook/react';

import ChecklistOutlined from '../../lib/editor/ChecklistOutlined';

const meta: Meta<typeof ChecklistOutlined> = {
  component: ChecklistOutlined,
  tags: ['autodocs'],
  title: 'editor/ChecklistOutlined',
};

export default meta;
type Story = StoryObj<typeof ChecklistOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
