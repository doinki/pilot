import type { Meta, StoryObj } from '@storybook/react';

import EditAttributesOutlined from '../../lib/maps/EditAttributesOutlined';

const meta: Meta<typeof EditAttributesOutlined> = {
  component: EditAttributesOutlined,
  tags: ['autodocs'],
  title: 'maps/EditAttributesOutlined',
};

export default meta;
type Story = StoryObj<typeof EditAttributesOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
