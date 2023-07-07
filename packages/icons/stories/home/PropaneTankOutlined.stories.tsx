import type { Meta, StoryObj } from '@storybook/react';

import PropaneTankOutlined from '../../lib/home/PropaneTankOutlined';

const meta: Meta<typeof PropaneTankOutlined> = {
  component: PropaneTankOutlined,
  tags: ['autodocs'],
  title: 'home/PropaneTankOutlined',
};

export default meta;
type Story = StoryObj<typeof PropaneTankOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
