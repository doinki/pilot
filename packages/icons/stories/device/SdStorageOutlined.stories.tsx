import type { Meta, StoryObj } from '@storybook/react';

import SdStorageOutlined from '../../lib/device/SdStorageOutlined';

const meta: Meta<typeof SdStorageOutlined> = {
  component: SdStorageOutlined,
  tags: ['autodocs'],
  title: 'device/SdStorageOutlined',
};

export default meta;
type Story = StoryObj<typeof SdStorageOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
