import type { Meta, StoryObj } from '@storybook/react';

import CopyAllOutlined from '../../lib/content/CopyAllOutlined';

const meta: Meta<typeof CopyAllOutlined> = {
  component: CopyAllOutlined,
  tags: ['autodocs'],
  title: 'content/CopyAllOutlined',
};

export default meta;
type Story = StoryObj<typeof CopyAllOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
