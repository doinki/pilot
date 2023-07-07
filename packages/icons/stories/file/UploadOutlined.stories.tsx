import type { Meta, StoryObj } from '@storybook/react';

import UploadOutlined from '../../lib/file/UploadOutlined';

const meta: Meta<typeof UploadOutlined> = {
  component: UploadOutlined,
  tags: ['autodocs'],
  title: 'file/UploadOutlined',
};

export default meta;
type Story = StoryObj<typeof UploadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
