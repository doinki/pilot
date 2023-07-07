import type { Meta, StoryObj } from '@storybook/react';

import AcUnitOutlined from '../../lib/places/AcUnitOutlined';

const meta: Meta<typeof AcUnitOutlined> = {
  component: AcUnitOutlined,
  tags: ['autodocs'],
  title: 'places/AcUnitOutlined',
};

export default meta;
type Story = StoryObj<typeof AcUnitOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
