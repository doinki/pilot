import type { Meta, StoryObj } from '@storybook/react';

import AddLocationOutlined from '../../lib/maps/AddLocationOutlined';

const meta: Meta<typeof AddLocationOutlined> = {
  component: AddLocationOutlined,
  tags: ['autodocs'],
  title: 'maps/AddLocationOutlined',
};

export default meta;
type Story = StoryObj<typeof AddLocationOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
