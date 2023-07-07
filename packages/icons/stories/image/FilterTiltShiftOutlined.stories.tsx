import type { Meta, StoryObj } from '@storybook/react';

import FilterTiltShiftOutlined from '../../lib/image/FilterTiltShiftOutlined';

const meta: Meta<typeof FilterTiltShiftOutlined> = {
  component: FilterTiltShiftOutlined,
  tags: ['autodocs'],
  title: 'image/FilterTiltShiftOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterTiltShiftOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
