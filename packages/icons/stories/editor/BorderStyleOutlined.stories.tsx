import type { Meta, StoryObj } from '@storybook/react';

import BorderStyleOutlined from '../../lib/editor/BorderStyleOutlined';

const meta: Meta<typeof BorderStyleOutlined> = {
  component: BorderStyleOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderStyleOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderStyleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
