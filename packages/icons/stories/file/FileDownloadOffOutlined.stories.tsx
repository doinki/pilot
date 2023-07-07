import type { Meta, StoryObj } from '@storybook/react';

import FileDownloadOffOutlined from '../../lib/file/FileDownloadOffOutlined';

const meta: Meta<typeof FileDownloadOffOutlined> = {
  component: FileDownloadOffOutlined,
  tags: ['autodocs'],
  title: 'file/FileDownloadOffOutlined',
};

export default meta;
type Story = StoryObj<typeof FileDownloadOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
