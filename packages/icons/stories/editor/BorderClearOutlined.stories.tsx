import type { Meta, StoryObj } from '@storybook/react';

import BorderClearOutlined from '../../lib/editor/BorderClearOutlined';

const meta: Meta<typeof BorderClearOutlined> = {
  component: BorderClearOutlined,
  tags: ['autodocs'],
  title: 'editor/BorderClearOutlined',
};

export default meta;
type Story = StoryObj<typeof BorderClearOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
