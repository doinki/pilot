import type { Meta, StoryObj } from '@storybook/react';

import NoSimOutlined from '../../lib/communication/NoSimOutlined';

const meta: Meta<typeof NoSimOutlined> = {
  component: NoSimOutlined,
  tags: ['autodocs'],
  title: 'communication/NoSimOutlined',
};

export default meta;
type Story = StoryObj<typeof NoSimOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
