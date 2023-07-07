import type { Meta, StoryObj } from '@storybook/react';

import WebAssetOutlined from '../../lib/av/WebAssetOutlined';

const meta: Meta<typeof WebAssetOutlined> = {
  component: WebAssetOutlined,
  tags: ['autodocs'],
  title: 'av/WebAssetOutlined',
};

export default meta;
type Story = StoryObj<typeof WebAssetOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
