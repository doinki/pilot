import type { Meta, StoryObj } from '@storybook/react';

import DeliveryDiningOutlined from '../../lib/maps/DeliveryDiningOutlined';

const meta: Meta<typeof DeliveryDiningOutlined> = {
  component: DeliveryDiningOutlined,
  tags: ['autodocs'],
  title: 'maps/DeliveryDiningOutlined',
};

export default meta;
type Story = StoryObj<typeof DeliveryDiningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
