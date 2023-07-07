import type { Meta, StoryObj } from '@storybook/react';

import ChecklistRtlOutlined from '../../lib/editor/ChecklistRtlOutlined';

const meta: Meta<typeof ChecklistRtlOutlined> = {
  component: ChecklistRtlOutlined,
  tags: ['autodocs'],
  title: 'editor/ChecklistRtlOutlined',
};

export default meta;
type Story = StoryObj<typeof ChecklistRtlOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
