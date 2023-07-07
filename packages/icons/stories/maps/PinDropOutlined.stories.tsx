import type { Meta, StoryObj } from '@storybook/react';

import PinDropOutlined from '../../lib/maps/PinDropOutlined';

const meta: Meta<typeof PinDropOutlined> = {
  component: PinDropOutlined,
  tags: ['autodocs'],
  title: 'maps/PinDropOutlined',
};

export default meta;
type Story = StoryObj<typeof PinDropOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
