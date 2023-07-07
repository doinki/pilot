import type { Meta, StoryObj } from '@storybook/react';

import BalconyOutlined from '../../lib/places/BalconyOutlined';

const meta: Meta<typeof BalconyOutlined> = {
  component: BalconyOutlined,
  tags: ['autodocs'],
  title: 'places/BalconyOutlined',
};

export default meta;
type Story = StoryObj<typeof BalconyOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
