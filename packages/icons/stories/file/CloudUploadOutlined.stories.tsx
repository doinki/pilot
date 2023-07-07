import type { Meta, StoryObj } from '@storybook/react';

import CloudUploadOutlined from '../../lib/file/CloudUploadOutlined';

const meta: Meta<typeof CloudUploadOutlined> = {
  component: CloudUploadOutlined,
  tags: ['autodocs'],
  title: 'file/CloudUploadOutlined',
};

export default meta;
type Story = StoryObj<typeof CloudUploadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
