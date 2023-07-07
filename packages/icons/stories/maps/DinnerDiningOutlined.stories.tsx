import type { Meta, StoryObj } from '@storybook/react';

import DinnerDiningOutlined from '../../lib/maps/DinnerDiningOutlined';

const meta: Meta<typeof DinnerDiningOutlined> = {
  component: DinnerDiningOutlined,
  tags: ['autodocs'],
  title: 'maps/DinnerDiningOutlined',
};

export default meta;
type Story = StoryObj<typeof DinnerDiningOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
