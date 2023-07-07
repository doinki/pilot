import type { Meta, StoryObj } from '@storybook/react';

import InsertEmoticonOutlined from '../../lib/editor/InsertEmoticonOutlined';

const meta: Meta<typeof InsertEmoticonOutlined> = {
  component: InsertEmoticonOutlined,
  tags: ['autodocs'],
  title: 'editor/InsertEmoticonOutlined',
};

export default meta;
type Story = StoryObj<typeof InsertEmoticonOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
