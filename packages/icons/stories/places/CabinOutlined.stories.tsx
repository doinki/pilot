import type { Meta, StoryObj } from '@storybook/react';

import CabinOutlined from '../../lib/places/CabinOutlined';

const meta: Meta<typeof CabinOutlined> = {
  component: CabinOutlined,
  tags: ['autodocs'],
  title: 'places/CabinOutlined',
};

export default meta;
type Story = StoryObj<typeof CabinOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
