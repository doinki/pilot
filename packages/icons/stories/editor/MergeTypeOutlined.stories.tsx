import type { Meta, StoryObj } from '@storybook/react';

import MergeTypeOutlined from '../../lib/editor/MergeTypeOutlined';

const meta: Meta<typeof MergeTypeOutlined> = {
  component: MergeTypeOutlined,
  tags: ['autodocs'],
  title: 'editor/MergeTypeOutlined',
};

export default meta;
type Story = StoryObj<typeof MergeTypeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
