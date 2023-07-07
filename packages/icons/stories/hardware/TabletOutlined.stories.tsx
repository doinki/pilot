import type { Meta, StoryObj } from '@storybook/react';

import TabletOutlined from '../../lib/hardware/TabletOutlined';

const meta: Meta<typeof TabletOutlined> = {
  component: TabletOutlined,
  tags: ['autodocs'],
  title: 'hardware/TabletOutlined',
};

export default meta;
type Story = StoryObj<typeof TabletOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
