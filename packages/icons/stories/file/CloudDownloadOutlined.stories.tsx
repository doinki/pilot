import type { Meta, StoryObj } from '@storybook/react';

import CloudDownloadOutlined from '../../lib/file/CloudDownloadOutlined';

const meta: Meta<typeof CloudDownloadOutlined> = {
  component: CloudDownloadOutlined,
  tags: ['autodocs'],
  title: 'file/CloudDownloadOutlined',
};

export default meta;
type Story = StoryObj<typeof CloudDownloadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
