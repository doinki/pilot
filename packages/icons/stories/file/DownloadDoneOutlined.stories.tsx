import type { Meta, StoryObj } from '@storybook/react';

import DownloadDoneOutlined from '../../lib/file/DownloadDoneOutlined';

const meta: Meta<typeof DownloadDoneOutlined> = {
  component: DownloadDoneOutlined,
  tags: ['autodocs'],
  title: 'file/DownloadDoneOutlined',
};

export default meta;
type Story = StoryObj<typeof DownloadDoneOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
