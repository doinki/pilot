import type { Meta, StoryObj } from '@storybook/react';

import EditLocationAltOutlined from '../../lib/maps/EditLocationAltOutlined';

const meta: Meta<typeof EditLocationAltOutlined> = {
  component: EditLocationAltOutlined,
  tags: ['autodocs'],
  title: 'maps/EditLocationAltOutlined',
};

export default meta;
type Story = StoryObj<typeof EditLocationAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
