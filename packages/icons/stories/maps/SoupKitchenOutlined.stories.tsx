import type { Meta, StoryObj } from '@storybook/react';

import SoupKitchenOutlined from '../../lib/maps/SoupKitchenOutlined';

const meta: Meta<typeof SoupKitchenOutlined> = {
  component: SoupKitchenOutlined,
  tags: ['autodocs'],
  title: 'maps/SoupKitchenOutlined',
};

export default meta;
type Story = StoryObj<typeof SoupKitchenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
