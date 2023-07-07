import type { Meta, StoryObj } from '@storybook/react';

import FilterAltOffOutlined from '../../lib/action/FilterAltOffOutlined';

const meta: Meta<typeof FilterAltOffOutlined> = {
  component: FilterAltOffOutlined,
  tags: ['autodocs'],
  title: 'action/FilterAltOffOutlined',
};

export default meta;
type Story = StoryObj<typeof FilterAltOffOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
