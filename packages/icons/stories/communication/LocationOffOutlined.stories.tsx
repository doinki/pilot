import type { Meta, StoryObj } from '@storybook/react';

import LocationOffOutlined from '../../lib/communication/LocationOffOutlined';

const meta: Meta<typeof LocationOffOutlined> = {
  component: LocationOffOutlined,
  tags: ['autodocs'],
  title: 'communication/LocationOffOutlined',
};

export default meta;
type Story = StoryObj<typeof LocationOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
