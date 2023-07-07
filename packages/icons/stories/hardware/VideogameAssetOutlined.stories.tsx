import type { Meta, StoryObj } from '@storybook/react';

import VideogameAssetOutlined from '../../lib/hardware/VideogameAssetOutlined';

const meta: Meta<typeof VideogameAssetOutlined> = {
  component: VideogameAssetOutlined,
  tags: ['autodocs'],
  title: 'hardware/VideogameAssetOutlined',
};

export default meta;
type Story = StoryObj<typeof VideogameAssetOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
