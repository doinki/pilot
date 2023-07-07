import type { Meta, StoryObj } from '@storybook/react';

import BlockOutlined from '../../lib/content/BlockOutlined';

const meta: Meta<typeof BlockOutlined> = {
  component: BlockOutlined,
  tags: ['autodocs'],
  title: 'content/BlockOutlined',
};

export default meta;
type Story = StoryObj<typeof BlockOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
