import type { Meta, StoryObj } from '@storybook/react';

import FitScreenOutlined from '../../lib/action/FitScreenOutlined';

const meta: Meta<typeof FitScreenOutlined> = {
  component: FitScreenOutlined,
  tags: ['autodocs'],
  title: 'action/FitScreenOutlined',
};

export default meta;
type Story = StoryObj<typeof FitScreenOutlined>;

export const Default: Story = {};

export const Size: Story = { args: { style: { height: 64, width: 64 } } };
