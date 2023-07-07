import type { Meta, StoryObj } from '@storybook/react';

import CardTravelOutlined from '../../lib/action/CardTravelOutlined';

const meta: Meta<typeof CardTravelOutlined> = {
  component: CardTravelOutlined,
  tags: ['autodocs'],
  title: 'action/CardTravelOutlined',
};

export default meta;
type Story = StoryObj<typeof CardTravelOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
