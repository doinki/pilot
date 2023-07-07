import type { Meta, StoryObj } from '@storybook/react';

import PersonPinCircleOutlined from '../../lib/maps/PersonPinCircleOutlined';

const meta: Meta<typeof PersonPinCircleOutlined> = {
  component: PersonPinCircleOutlined,
  tags: ['autodocs'],
  title: 'maps/PersonPinCircleOutlined',
};

export default meta;
type Story = StoryObj<typeof PersonPinCircleOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
