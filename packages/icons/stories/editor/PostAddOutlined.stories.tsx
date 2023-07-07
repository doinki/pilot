import type { Meta, StoryObj } from '@storybook/react';

import PostAddOutlined from '../../lib/editor/PostAddOutlined';

const meta: Meta<typeof PostAddOutlined> = {
  component: PostAddOutlined,
  tags: ['autodocs'],
  title: 'editor/PostAddOutlined',
};

export default meta;
type Story = StoryObj<typeof PostAddOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
