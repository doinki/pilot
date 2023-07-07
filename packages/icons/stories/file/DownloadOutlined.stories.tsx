import type { Meta, StoryObj } from '@storybook/react';

import DownloadOutlined from '../../lib/file/DownloadOutlined';

const meta: Meta<typeof DownloadOutlined> = {
  component: DownloadOutlined,
  tags: ['autodocs'],
  title: 'file/DownloadOutlined',
};

export default meta;
type Story = StoryObj<typeof DownloadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
