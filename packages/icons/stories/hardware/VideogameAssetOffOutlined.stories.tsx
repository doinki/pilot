import type { Meta, StoryObj } from '@storybook/react';

import VideogameAssetOffOutlined from '../../lib/hardware/VideogameAssetOffOutlined';

const meta: Meta<typeof VideogameAssetOffOutlined> = {
  component: VideogameAssetOffOutlined,
  tags: ['autodocs'],
  title: 'hardware/VideogameAssetOffOutlined',
};

export default meta;
type Story = StoryObj<typeof VideogameAssetOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
