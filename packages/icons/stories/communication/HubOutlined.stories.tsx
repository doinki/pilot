import type { Meta, StoryObj } from '@storybook/react';

import HubOutlined from '../../lib/communication/HubOutlined';

const meta: Meta<typeof HubOutlined> = {
  component: HubOutlined,
  tags: ['autodocs'],
  title: 'communication/HubOutlined',
};

export default meta;
type Story = StoryObj<typeof HubOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
