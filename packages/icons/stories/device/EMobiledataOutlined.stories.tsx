import type { Meta, StoryObj } from '@storybook/react';

import EMobiledataOutlined from '../../lib/device/EMobiledataOutlined';

const meta: Meta<typeof EMobiledataOutlined> = {
  component: EMobiledataOutlined,
  tags: ['autodocs'],
  title: 'device/EMobiledataOutlined',
};

export default meta;
type Story = StoryObj<typeof EMobiledataOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
