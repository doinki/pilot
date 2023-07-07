import type { Meta, StoryObj } from '@storybook/react';

import LocalPizzaOutlined from '../../lib/maps/LocalPizzaOutlined';

const meta: Meta<typeof LocalPizzaOutlined> = {
  component: LocalPizzaOutlined,
  tags: ['autodocs'],
  title: 'maps/LocalPizzaOutlined',
};

export default meta;
type Story = StoryObj<typeof LocalPizzaOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
