import type { Meta, StoryObj } from '@storybook/react';

import CastConnectedOutlined from '../../lib/hardware/CastConnectedOutlined';

const meta: Meta<typeof CastConnectedOutlined> = {
  component: CastConnectedOutlined,
  tags: ['autodocs'],
  title: 'hardware/CastConnectedOutlined',
};

export default meta;
type Story = StoryObj<typeof CastConnectedOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
