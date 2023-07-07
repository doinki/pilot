import type { Meta, StoryObj } from '@storybook/react';

import FontDownloadOutlined from '../../lib/content/FontDownloadOutlined';

const meta: Meta<typeof FontDownloadOutlined> = {
  component: FontDownloadOutlined,
  tags: ['autodocs'],
  title: 'content/FontDownloadOutlined',
};

export default meta;
type Story = StoryObj<typeof FontDownloadOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
