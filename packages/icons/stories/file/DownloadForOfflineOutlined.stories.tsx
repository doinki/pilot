import type { Meta, StoryObj } from '@storybook/react';

import DownloadForOfflineOutlined from '../../lib/file/DownloadForOfflineOutlined';

const meta: Meta<typeof DownloadForOfflineOutlined> = {
  component: DownloadForOfflineOutlined,
  tags: ['autodocs'],
  title: 'file/DownloadForOfflineOutlined',
};

export default meta;
type Story = StoryObj<typeof DownloadForOfflineOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
