import type { Meta, StoryObj } from '@storybook/react';

import DownloadingOutlined from '../../lib/file/DownloadingOutlined';

const meta: Meta<typeof DownloadingOutlined> = {
  component: DownloadingOutlined,
  tags: ['autodocs'],
  title: 'file/DownloadingOutlined',
};

export default meta;
type Story = StoryObj<typeof DownloadingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
