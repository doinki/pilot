import type { Meta, StoryObj } from '@storybook/react';

import WebAssetOffOutlined from '../../lib/av/WebAssetOffOutlined';

const meta: Meta<typeof WebAssetOffOutlined> = {
  component: WebAssetOffOutlined,
  tags: ['autodocs'],
  title: 'av/WebAssetOffOutlined',
};

export default meta;
type Story = StoryObj<typeof WebAssetOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
