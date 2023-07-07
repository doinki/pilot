import type { Meta, StoryObj } from '@storybook/react';

import CableOutlined from '../../lib/device/CableOutlined';

const meta: Meta<typeof CableOutlined> = {
  component: CableOutlined,
  tags: ['autodocs'],
  title: 'device/CableOutlined',
};

export default meta;
type Story = StoryObj<typeof CableOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
