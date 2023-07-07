import type { Meta, StoryObj } from '@storybook/react';

import AddBusinessOutlined from '../../lib/maps/AddBusinessOutlined';

const meta: Meta<typeof AddBusinessOutlined> = {
  component: AddBusinessOutlined,
  tags: ['autodocs'],
  title: 'maps/AddBusinessOutlined',
};

export default meta;
type Story = StoryObj<typeof AddBusinessOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
