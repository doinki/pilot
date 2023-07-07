import type { Meta, StoryObj } from '@storybook/react';

import TabletMacOutlined from '../../lib/hardware/TabletMacOutlined';

const meta: Meta<typeof TabletMacOutlined> = {
  component: TabletMacOutlined,
  tags: ['autodocs'],
  title: 'hardware/TabletMacOutlined',
};

export default meta;
type Story = StoryObj<typeof TabletMacOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
