import type { Meta, StoryObj } from '@storybook/react';

import InterpreterModeOutlined from '../../lib/av/InterpreterModeOutlined';

const meta: Meta<typeof InterpreterModeOutlined> = {
  component: InterpreterModeOutlined,
  tags: ['autodocs'],
  title: 'av/InterpreterModeOutlined',
};

export default meta;
type Story = StoryObj<typeof InterpreterModeOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
