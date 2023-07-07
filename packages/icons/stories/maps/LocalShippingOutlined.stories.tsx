import type { Meta, StoryObj } from '@storybook/react';

import LocalShippingOutlined from '../../lib/maps/LocalShippingOutlined';

const meta: Meta<typeof LocalShippingOutlined> = {
  component: LocalShippingOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalShippingOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalShippingOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
