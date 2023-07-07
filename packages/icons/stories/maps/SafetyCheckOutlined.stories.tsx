import type { Meta, StoryObj } from '@storybook/react';

import SafetyCheckOutlined from '../../lib/maps/SafetyCheckOutlined';

const meta: Meta<typeof SafetyCheckOutlined> = {
  component: SafetyCheckOutlined,
  tags: ['autodocs'],
  title: 'maps/SafetyCheckOutlined',
};

export default meta;
type Story = StoryObj<typeof SafetyCheckOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
