import type { Meta, StoryObj } from '@storybook/react';

import EditLocationOutlined from '../../lib/maps/EditLocationOutlined';

const meta: Meta<typeof EditLocationOutlined> = {
  component: EditLocationOutlined,
  tags: ['autodocs'],
  title: 'maps/EditLocationOutlined',
};

export default meta;
type Story = StoryObj<typeof EditLocationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
