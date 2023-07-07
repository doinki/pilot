import type { Meta, StoryObj } from '@storybook/react';

import FileOpenOutlined from '../../lib/file/FileOpenOutlined';

const meta: Meta<typeof FileOpenOutlined> = {
  component: FileOpenOutlined,
  tags: ['autodocs'],
  title: 'file/FileOpenOutlined',
};

export default meta;
type Story = StoryObj<typeof FileOpenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
