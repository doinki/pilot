import type { Meta, StoryObj } from '@storybook/react';

import FileDownloadDoneOutlined from '../../lib/file/FileDownloadDoneOutlined';

const meta: Meta<typeof FileDownloadDoneOutlined> = {
  component: FileDownloadDoneOutlined,
  tags: ['autodocs'],
  title: 'file/FileDownloadDoneOutlined',
};

export default meta;
type Story = StoryObj<typeof FileDownloadDoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
