import type { Meta, StoryObj } from '@storybook/react';

import UploadFileOutlined from '../../lib/file/UploadFileOutlined';

const meta: Meta<typeof UploadFileOutlined> = {
  component: UploadFileOutlined,
  tags: ['autodocs'],
  title: 'file/UploadFileOutlined',
};

export default meta;
type Story = StoryObj<typeof UploadFileOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
