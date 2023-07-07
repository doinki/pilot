import type { Meta, StoryObj } from '@storybook/react';

import MultipleStopOutlined from '../../lib/maps/MultipleStopOutlined';

const meta: Meta<typeof MultipleStopOutlined> = {
  component: MultipleStopOutlined,
  tags: ['autodocs'],
  title: 'maps/MultipleStopOutlined',
};

export default meta;
type Story = StoryObj<typeof MultipleStopOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
