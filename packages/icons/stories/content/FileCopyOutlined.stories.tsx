import type { Meta, StoryObj } from '@storybook/react';

import FileCopyOutlined from '../../lib/content/FileCopyOutlined';

const meta: Meta<typeof FileCopyOutlined> = {
  component: FileCopyOutlined,
  tags: ['autodocs'],
  title: 'content/FileCopyOutlined',
};

export default meta;
type Story = StoryObj<typeof FileCopyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
