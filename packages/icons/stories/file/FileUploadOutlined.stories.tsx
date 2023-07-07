import type { Meta, StoryObj } from '@storybook/react';

import FileUploadOutlined from '../../lib/file/FileUploadOutlined';

const meta: Meta<typeof FileUploadOutlined> = {
  component: FileUploadOutlined,
  tags: ['autodocs'],
  title: 'file/FileUploadOutlined',
};

export default meta;
type Story = StoryObj<typeof FileUploadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
