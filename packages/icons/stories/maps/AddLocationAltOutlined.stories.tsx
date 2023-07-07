import type { Meta, StoryObj } from '@storybook/react';

import AddLocationAltOutlined from '../../lib/maps/AddLocationAltOutlined';

const meta: Meta<typeof AddLocationAltOutlined> = {
  component: AddLocationAltOutlined,
  tags: ['autodocs'],
  title: 'maps/AddLocationAltOutlined',
};

export default meta;
type Story = StoryObj<typeof AddLocationAltOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
