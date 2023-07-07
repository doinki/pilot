import type { Meta, StoryObj } from '@storybook/react';

import FileDownloadOutlined from '../../lib/file/FileDownloadOutlined';

const meta: Meta<typeof FileDownloadOutlined> = {
  component: FileDownloadOutlined,
  tags: ['autodocs'],
  title: 'file/FileDownloadOutlined',
};

export default meta;
type Story = StoryObj<typeof FileDownloadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
