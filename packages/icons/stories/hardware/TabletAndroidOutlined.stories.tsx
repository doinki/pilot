import type { Meta, StoryObj } from '@storybook/react';

import TabletAndroidOutlined from '../../lib/hardware/TabletAndroidOutlined';

const meta: Meta<typeof TabletAndroidOutlined> = {
  component: TabletAndroidOutlined,
  tags: ['autodocs'],
  title: 'hardware/TabletAndroidOutlined',
};

export default meta;
type Story = StoryObj<typeof TabletAndroidOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
