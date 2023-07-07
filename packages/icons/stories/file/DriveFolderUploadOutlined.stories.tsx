import type { Meta, StoryObj } from '@storybook/react';

import DriveFolderUploadOutlined from '../../lib/file/DriveFolderUploadOutlined';

const meta: Meta<typeof DriveFolderUploadOutlined> = {
  component: DriveFolderUploadOutlined,
  tags: ['autodocs'],
  title: 'file/DriveFolderUploadOutlined',
};

export default meta;
type Story = StoryObj<typeof DriveFolderUploadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
