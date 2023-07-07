import type { Meta, StoryObj } from '@storybook/react';

import CoffeeMakerOutlined from '../../lib/search/CoffeeMakerOutlined';

const meta: Meta<typeof CoffeeMakerOutlined> = {
  component: CoffeeMakerOutlined,
  tags: ['autodocs'],
  title: 'search/CoffeeMakerOutlined',
};

export default meta;
type Story = StoryObj<typeof CoffeeMakerOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
