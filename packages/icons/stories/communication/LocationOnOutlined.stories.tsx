import type { Meta, StoryObj } from '@storybook/react';

import LocationOnOutlined from '../../lib/communication/LocationOnOutlined';

const meta: Meta<typeof LocationOnOutlined> = {
  component: LocationOnOutlined,
  tags: ['autodocs'],
  title: 'communication/LocationOnOutlined',
};

export default meta;
type Story = StoryObj<typeof LocationOnOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
