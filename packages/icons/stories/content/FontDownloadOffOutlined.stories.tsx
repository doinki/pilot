import type { Meta, StoryObj } from '@storybook/react';

import FontDownloadOffOutlined from '../../lib/content/FontDownloadOffOutlined';

const meta: Meta<typeof FontDownloadOffOutlined> = {
  component: FontDownloadOffOutlined,
  tags: ['autodocs'],
  title: 'content/FontDownloadOffOutlined',
};

export default meta;
type Story = StoryObj<typeof FontDownloadOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
